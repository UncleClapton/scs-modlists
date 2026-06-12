import { siiT } from "../../ast";
import type { SII } from "../../ast/types";
import { ErrorCode, SIISyntaxError } from "../errors";

export class SIIFixedArrayBuilder {
  private key: SII.Identifier;
  private items: Record<number, SII.FixedArrayElement> = {};

  constructor(key: SII.Identifier) {
    this.key = key;
  }

  private declaration: SII.FixedArrayDeclarationAttribute | undefined;
  declare = (declaration: SII.FixedArrayDeclarationAttribute) => {
    if (this.declaration) {
      throw new SIISyntaxError(
        ErrorCode.Syntax.ArrayAlreadyDeclared({
          key: this.key.value,
        }),
        declaration.key.loc,
      );
    }

    if (declaration.key.value !== this.key.value) {
      throw new SIISyntaxError(
        ErrorCode.Syntax.MismatchedArrayKey({
          expected: this.key.value,
          actual: declaration.key.value,
        }),
        declaration.key.loc,
      );
    }

    this.declaration = declaration;
    return this;
  };

  append = (key: SII.Identifier, index: number, value: SII.Literal) => {
    if (this.items[index]) {
      throw new SIISyntaxError(
        ErrorCode.Syntax.ArrayIndexAlreadySet({
          index,
          key: this.key.value,
        }),
        key.loc,
      );
    }
    if (key.value !== this.key.value) {
      throw new SIISyntaxError(
        ErrorCode.Syntax.MismatchedArrayKey({
          expected: this.key.value,
          actual: key.value,
        }),
        key.loc,
      );
    }

    this.items[index] = siiT.fixedArrayElement(key, index, value, {
      start: key.loc.start,
      end: value.loc.end,
    });
    return this;
  };

  build = (): SII.FixedArrayAttribute => {
    if (this.declaration === undefined) {
      throw new SIISyntaxError(
        ErrorCode.Syntax.MissingFixedArrayDeclaration({
          key: this.key.value,
        }),
        this.key.loc,
      );
    }

    const itemArray: SII.FixedArrayElement[] = new Array(
      this.declaration.value.value,
    );

    let startLine = this.declaration.loc.start;
    let endLine = this.declaration.loc.end;

    for (let i = 0; i < this.declaration.value.value; i++) {
      const item = this.items[i];
      if (!item) {
        throw new SIISyntaxError(
          ErrorCode.Syntax.MissingFixedArrayIndexValue({ index: i }),
          this.declaration.key.loc,
        );
      }
      startLine = minPos(startLine, item.loc.start ?? Infinity);
      endLine = maxPos(endLine, item.loc.end ?? -Infinity);
      itemArray[i] = item;
    }

    return siiT.fixedArrayAttribute(
      this.declaration.key,
      this.declaration,
      itemArray,
      {
        start: startLine,
        end: endLine,
      },
    );
  };
}

export class SIIDynamicArrayBuilder {
  private key: SII.Identifier;
  private items: SII.DynamicArrayElement[] = [];

  constructor(key: SII.Identifier) {
    this.key = key;
  }

  push = (key: SII.Identifier, value: SII.Literal) => {
    this.items.push(
      siiT.dynamicArrayElement(key, value, {
        start: key.loc.start,
        end: value.loc.end,
      }),
    );
    return this;
  };

  build(): SII.DynamicArrayAttribute {
    const itemCount = this.items.length;

    if (!itemCount) {
      throw new SIISyntaxError(
        ErrorCode.Syntax.CannotBuildDynamicArrayWithoutItems,
        this.key.loc,
      );
    }

    const itemArray: SII.DynamicArrayElement[] = new Array(itemCount);

    let startLine = this.key.loc.start;
    let endLine = this.key.loc.end;

    for (let i = 0; i < itemCount; i++) {
      const item = this.items[i];
      if (!item) {
        continue;
      }
      startLine = minPos(startLine, item.loc.start);
      endLine = maxPos(endLine, item.loc.end);
      itemArray[i] = item;
    }

    return siiT.dynamicArrayAttribute(this.key, itemArray, {
      start: startLine,
      end: endLine,
    });
  }
}

function minPos(loc1: SII.Position, loc2: SII.Position): SII.Position {
  if (!loc1) return loc2;
  if (!loc2) return loc1;

  if (loc1.line < loc2.line) {
    return loc1;
  } else if (loc2.line < loc1.line) {
    return loc2;
  } else {
    // Lines are equal, compare columns
    return loc1.column <= loc2.column ? loc1 : loc2;
  }
}

function maxPos(loc1: SII.Position, loc2: SII.Position): SII.Position {
  if (!loc1) return loc2;
  if (!loc2) return loc1;

  if (loc1.line > loc2.line) {
    return loc1;
  } else if (loc2.line > loc1.line) {
    return loc2;
  } else {
    // Lines are equal, compare columns
    return loc1.column >= loc2.column ? loc1 : loc2;
  }
}
