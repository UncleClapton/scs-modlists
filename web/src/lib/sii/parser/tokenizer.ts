import type { SII } from "../ast";
import { ErrorCode, SIISyntaxError } from "./errors";
import { TokenKind, type Token } from "./types";

export type TokenGenerator = Generator<Token, Token, Token>;

const IDENTIFIER_START_RE = /[a-zA-Z_.]/;
const IDENTIFIER_BODY_RE = /[a-zA-Z0-9_.]/;
const UNQUOTED_STRING_CHAR_RE = /[a-zA-Z0-9_]/;
const DIGIT_RE = /[0-9]/;
const WHITESPACE_RE = /\s/;

const SINGLE_CHAR_TOKENS: Partial<Record<string, TokenKind>> = {
  ",": "Comma",
  ";": "Semicolon",
  ":": "Colon",
  "(": "LParen",
  ")": "RParen",
  "[": "LBracket",
  "]": "RBracket",
  "{": "LBrace",
  "}": "RBrace",
  "\n": "Newline",
};

const isIdentifierStart = (char: string): boolean =>
  IDENTIFIER_START_RE.test(char);
const isIdentifierBody = (char: string): boolean =>
  IDENTIFIER_BODY_RE.test(char);
const isUnquotedStringChar = (char: string): boolean =>
  UNQUOTED_STRING_CHAR_RE.test(char);
const isDigit = (char: string): boolean => DIGIT_RE.test(char);
const isWhitespace = (char: string): boolean => WHITESPACE_RE.test(char);

export function* tokenizeSIIFile(siiFile: string): TokenGenerator {
  let currentLine = 1;
  let currentOffset = 0;
  let currentColumn = 1;

  const cursor = (delta = 0): string | undefined =>
    siiFile[currentOffset + delta];
  cursor.consume = (): string | undefined => {
    const char = siiFile[currentOffset];
    if (typeof char === "undefined") {
      return undefined;
    }

    currentOffset += 1;
    if (char === "\n") {
      currentLine += 1;
      currentColumn = 1;
    } else {
      currentColumn += 1;
    }

    return char;
  };
  cursor.consumeWhile = (predicate: (char: string) => boolean): string => {
    let value = "";
    while (true) {
      const char = cursor();
      if (typeof char === "undefined" || !predicate(char)) {
        break;
      }

      value += char;
      cursor.consume();
    }

    return value;
  };
  cursor.peekWhile = (
    continueIf: (char: string) => boolean,
    endWhen: (char: string) => boolean,
  ): boolean => {
    let delta = 0;

    while (true) {
      const char = cursor(delta);
      if (typeof char === "undefined" || !continueIf(char)) {
        return false;
      }

      if (!endWhen(char)) {
        return true;
      }

      delta += 1;
    }
  };

  cursor.pos = (): SII.Position => ({
    line: currentLine,
    column: currentColumn,
    offset: currentOffset,
  });

  const makeToken = (
    type: TokenKind,
    value: string,
    start: SII.Position,
    end: SII.Position,
  ) => ({
    type,
    value,
    loc: { start, end },
  });

  const readStringLiteral = (start: SII.Position): string => {
    let value = "";
    let escaped = false;
    let closed = false;

    cursor.consume(); // opening quote

    while (currentOffset < siiFile.length) {
      const char = cursor.consume();
      if (typeof char === "undefined") {
        break;
      }

      if (escaped) {
        value += char;
        escaped = false;
        continue;
      }

      if (char === "\\") {
        escaped = true;
        continue;
      }

      if (char === '"') {
        closed = true;
        break;
      }

      value += char;
    }

    if (!closed) {
      throw new SIISyntaxError(ErrorCode.Lexical.UnterminatedStringLiteral, {
        start,
        end: cursor.pos(),
      });
    }

    return value;
  };

  const skipBlockComment = (start: SII.Position): void => {
    cursor.consume(); // '/'
    cursor.consume(); // '*'

    let isClosed = false;
    while (currentOffset < siiFile.length) {
      if (cursor() === "*" && cursor(1) === "/") {
        cursor.consume();
        cursor.consume();
        isClosed = true;
        break;
      }

      cursor.consume();
    }

    if (!isClosed) {
      throw new SIISyntaxError(ErrorCode.Lexical.UnterminatedBlockComment, {
        start,
        end: cursor.pos(),
      });
    }
  };

  const readNumberLiteral = (
    start: SII.Position,
    firstChar: string,
  ): string => {
    let value = "";

    if (firstChar === "-") {
      if (!isDigit(cursor(1) ?? "")) {
        throw new SIISyntaxError(ErrorCode.Lexical.UnexpectedMinus, start);
      }

      value += cursor.consume();
    }

    value += cursor.consumeWhile(isDigit);

    if (cursor() === ".") {
      value += cursor.consume();

      if (!isDigit(cursor() ?? "")) {
        throw new SIISyntaxError(
          ErrorCode.Lexical.InvalidNumberLiteral({ value }),
          start,
        );
      }

      value += cursor.consumeWhile(isDigit);
    }

    if (cursor() === ".") {
      throw new SIISyntaxError(
        ErrorCode.Lexical.InvalidNumberLiteral({ value: `${value}.` }),
        start,
      );
    }

    if (value === "-" || value === "") {
      throw new SIISyntaxError(
        ErrorCode.Lexical.UnexpectedCharacter({ char: firstChar }),
        cursor.pos(),
      );
    }

    return value;
  };

  while (currentOffset < siiFile.length) {
    const char = cursor();
    if (typeof char === "undefined") {
      break;
    }

    const start = cursor.pos();

    if (char === "/" && cursor(1) === "*") {
      skipBlockComment(start);
      continue;
    }

    const singleCharType = SINGLE_CHAR_TOKENS[char];
    if (singleCharType) {
      cursor.consume();
      yield makeToken(singleCharType, char, start, cursor.pos());
      continue;
    }

    if (isWhitespace(char)) {
      cursor.consume();
      continue;
    }

    if (char === '"') {
      yield makeToken(
        TokenKind.String,
        readStringLiteral(start),
        start,
        cursor.pos(),
      );
      continue;
    }

    if (isDigit(char) && cursor.peekWhile(isUnquotedStringChar, isDigit)) {
      const value = cursor.consumeWhile(isUnquotedStringChar);
      yield makeToken(TokenKind.String, value, start, cursor.pos());
      continue;
    }

    if (isIdentifierStart(char)) {
      const value = cursor.consumeWhile(isIdentifierBody);
      const type: TokenKind =
        value === TokenKind.SiiNunit
          ? TokenKind.SiiNunit
          : value === "true"
            ? TokenKind.True
            : value === "false"
              ? TokenKind.False
              : value.includes(".")
                ? TokenKind.Identifier
                : TokenKind.String;

      yield makeToken(type, value, start, cursor.pos());
      continue;
    }

    if (char === "-" || isDigit(char)) {
      const value = readNumberLiteral(start, char);
      yield makeToken(TokenKind.Number, value, start, cursor.pos());
      continue;
    }

    if (char === "@") {
      throw new SIISyntaxError(
        ErrorCode.Lexical.UnsupportedPreprocessorDirectiveAt,
        start,
      );
    }

    throw new SIISyntaxError(
      ErrorCode.Lexical.UnexpectedCharacter({ char }),
      start,
    );
  }

  const eofPos = cursor.pos();
  return makeToken(TokenKind.EOF, "", eofPos, eofPos);
}
