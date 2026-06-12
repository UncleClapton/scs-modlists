import { siiT } from "../../ast";
import type { SII } from "../../ast/types";
import { ErrorCode, SIISyntaxError } from "../errors";

export class SIIFileBuilder {
  #units: SII.Unit[] = [];
  public get units(): Readonly<SII.Unit[]> {
    return this.#units;
  }

  #openPos: SII.Position;
  public get openLine() {
    return this.#openPos;
  }

  #closePos: SII.Position | undefined;
  public get closeLine() {
    return this.#closePos;
  }

  constructor(openPos: SII.Position) {
    this.#openPos = openPos;
  }

  isOpen = () => this.#closePos === undefined;

  close = (closePos: SII.Position) => {
    if (this.#closePos !== undefined) {
      throw new SIISyntaxError(
        ErrorCode.Syntax.UnexpectedExcessiveClosingBrace,
        closePos,
      );
    }
    this.#closePos = closePos;
    return this;
  };

  append = (unit: SII.Unit) => {
    if (this.#closePos !== undefined) {
      throw new SIISyntaxError(
        ErrorCode.Syntax.UnexpectedUnitAfterFileClosingBrace,
        unit.loc,
      );
    }
    this.#units.push(unit);
    return this;
  };

  build = (): SII.File => {
    if (this.#closePos === undefined) {
      throw new SIISyntaxError(
        ErrorCode.Syntax.UnexpectedEndOfFile({
          context: "building file output (missing closing '}')",
        }),
        this.#openPos,
      );
    }

    return siiT.file(this.#units, {
      start: this.#openPos,
      end: this.#closePos,
    });
  };
}
