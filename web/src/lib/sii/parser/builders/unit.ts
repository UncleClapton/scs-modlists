import { siiG, siiT } from "../../ast";
import type { SII } from "../../ast/types";
import { ErrorCode, SIISyntaxError } from "../errors";
import { SIIDynamicArrayBuilder, SIIFixedArrayBuilder } from "./array";

type FixedArrayPlaceholder = {
  type: "FixedArrayPlaceholder";
  key: SII.Identifier;
  builder: SIIFixedArrayBuilder;
};
type DynamicArrayPlaceholder = {
  type: "DynamicArrayPlaceholder";
  key: SII.Identifier;
  builder: SIIDynamicArrayBuilder;
};
type BuilderPlaceholder = FixedArrayPlaceholder | DynamicArrayPlaceholder;
type BuilderAttribute = SII.LiteralAttribute | BuilderPlaceholder;

export class SIIUnitBuilder {
  #className: SII.Identifier;
  public get className() {
    return this.#className;
  }

  #name: SII.Identifier;
  public get name() {
    return this.#name;
  }

  #attributeMap: Record<string, number> = {};
  #children: BuilderAttribute[] = [];

  #openPos: SII.Position;
  public get openLine() {
    return this.#openPos;
  }

  #closePos: SII.Position | undefined;
  public get closeLine() {
    return this.#closePos;
  }

  constructor(
    className: SII.Identifier,
    name: SII.Identifier,
    openPos: SII.Position,
  ) {
    this.#className = className;
    this.#name = name;
    this.#openPos = openPos;
  }

  isOpen = () => this.#closePos === undefined;

  close = (closePos: SII.Position) => {
    if (this.#closePos !== undefined) {
      throw new SIISyntaxError(
        ErrorCode.Syntax.UnexpectedExcessiveClosingBrace,
        this.#closePos,
      );
    }
    this.#closePos = closePos;
    return this;
  };

  appendFixedArrayElement = (
    key: SII.Identifier,
    arrayIndex: number,
    value: SII.Literal,
  ) => {
    if (this.#closePos !== undefined) {
      throw new SIISyntaxError(
        ErrorCode.Syntax.UnexpectedAttributeOutOfUnit,
        key.loc,
      );
    }

    let existingAttribute = this.#getAttribute(key.value);
    // if there is no attribute, treat this as a new fixed array without a known size (for now).
    if (!existingAttribute) {
      existingAttribute = this.#setAttribute({
        type: "FixedArrayPlaceholder",
        key,
        builder: new SIIFixedArrayBuilder(key),
      });
      // If there is an existing regular attribute with a number literal value,
      // treat that as the array declaration and create a new builder with the known size.
    } else if (
      siiG.isLiteralAttribute(existingAttribute, siiG.isNumberLiteral)
    ) {
      const newBuilder = new SIIFixedArrayBuilder(key).declare(
        existingAttribute,
      );
      existingAttribute = this.#setAttribute({
        type: "FixedArrayPlaceholder",
        key,
        builder: newBuilder,
      });
      // If there is an existing entry that is a dynamic array placeholder, this is a type conflict and we should throw an error.
    } else if (existingAttribute.type === "DynamicArrayPlaceholder") {
      throw new SIISyntaxError(
        ErrorCode.Syntax.CannotMixFixedAndDynamicArrays({
          key: key.value,
        }),
        key.loc,
      );
      // If there is an existing regular attribute other than a number, this is a duplicate key conflict.
    } else if (existingAttribute.type === "LiteralAttribute") {
      throw new SIISyntaxError(
        ErrorCode.Syntax.DuplicateAttributeKey({
          key: key.value,
        }),
        key.loc,
      );
    }

    existingAttribute.builder.append(key, arrayIndex, value);
    return this;
  };

  appendDynamicArrayAttribute = (key: SII.Identifier, value: SII.Literal) => {
    if (this.#closePos !== undefined) {
      throw new SIISyntaxError(
        ErrorCode.Syntax.UnitAlreadyClosedCannotModify,
        key.loc,
      );
    }
    let existingAttribute = this.#getAttribute(key.value);
    if (!existingAttribute) {
      existingAttribute = this.#setAttribute({
        type: "DynamicArrayPlaceholder",
        key,
        builder: new SIIDynamicArrayBuilder(key),
      });
    } else if (existingAttribute.type !== "DynamicArrayPlaceholder") {
      throw new SIISyntaxError(
        ErrorCode.Syntax.CannotMixFixedAndDynamicArrays({
          key: key.value,
        }),
        key.loc,
      );
    }

    existingAttribute.builder.push(key, value);
    return this;
  };

  appendLiteralAttribute = (key: SII.Identifier, value: SII.Literal) => {
    if (this.#closePos !== undefined) {
      throw new SIISyntaxError(
        ErrorCode.Syntax.UnexpectedAttributeOutOfUnit,
        key.loc,
      );
    }

    const existingAttribute = this.#getAttribute(key.value);
    if (existingAttribute !== undefined) {
      if (
        existingAttribute.type === "FixedArrayPlaceholder" &&
        siiG.isNumberLiteral(value)
      ) {
        existingAttribute.builder.declare(
          siiT.literalAttribute(key, value, {
            start: key.loc.start,
            end: value.loc.end,
          }),
        );
        return;
      }

      throw new SIISyntaxError(
        ErrorCode.Syntax.DuplicateAttributeKey({ key: key.value }),
        key.loc,
      );
    }

    this.#setAttribute(
      siiT.literalAttribute(key, value, {
        start: key.loc.start,
        end: value.loc.end,
      }),
    );
    return this;
  };

  build = (): SII.Unit => {
    if (this.#closePos === undefined) {
      throw new SIISyntaxError(
        ErrorCode.Syntax.UnexpectedEndOfFile({
          context: "building unit output (missing closing '}')",
        }),
        this.#openPos,
      );
    }

    const attributes: SII.Attribute[] = this.#children.map((child) => {
      if (child.type === "FixedArrayPlaceholder") {
        return child.builder.build();
      }

      if (child.type === "DynamicArrayPlaceholder") {
        return child.builder.build();
      }

      return child;
    });

    return siiT.unit(this.#name, this.#className, attributes, {
      start: this.#openPos,
      end: this.#closePos,
    });
  };

  #setAttribute = <T extends BuilderAttribute>(attribute: T): T => {
    const index = this.#attributeMap[attribute.key.value];
    if (index === undefined) {
      this.#children.push(attribute);
      this.#attributeMap[attribute.key.value] = this.#children.length - 1;
    } else {
      this.#children[index] = attribute;
    }
    return attribute;
  };

  #getAttribute = (key: string): BuilderAttribute | undefined => {
    const index = this.#attributeMap[key];
    if (index === undefined) {
      return undefined;
    }
    return this.#children[index];
  };
}
