/**
 * SiiNunit files must follow this structure:
 *
 *
 * SiiNunit
 * {
 * class_bame : base_class_name {
 *  string_property: "stringValue"
 *  another_string_property: anotherStringValue
 *  number_property: 123
 *  bool_property: true
 *  array_property: 2,
 *  array_property[0]: "firstValue"
 *  array_property[1]: "secondValue"
 * }
 * another_class_name : another_base_class_name {
 *  ...other_properties
 * }
 *
 * }
 */

import { SIIFileBuilder, SIIUnitBuilder } from "./builders";
import type { SII } from "../ast/types";
import { ErrorCode, SIISyntaxError } from "./errors";
import { tokenizeSIIFile, type TokenGenerator } from "./tokenizer";
import { TokenKind, type Token } from "./types";
import { siiT } from "../ast";

const OWNER_POINTER_RE = /^\.([a-zA-Z0-9_]+\.)+[a-zA-Z0-9_]+$/;
const LINK_POINTER_RE = /^([a-zA-Z0-9_]+\.)+[a-zA-Z0-9_]+$/;
const FLOAT_LITERAL_RE = /^-?\d+\.\d+$/;
const INTEGER_LITERAL_RE = /^-?\d+$/;
const ARRAY_INDEX_RE = /^\d+$/;

/**
 * Parses the content of a SiiNunit file and returns an abstract syntax tree (AST) representation of its structure.
 */
export function parseSIIFile(siiContent: string): SII.File {
  const tokenized: TokenGenerator = tokenizeSIIFile(siiContent);
  const lookahead: Token[] = [];
  let eofToken: Token | null = null;

  // MARK: UTILITIES

  const readNextToken = (): Token => {
    const iteratorResult = tokenized.next();
    if (iteratorResult.done) {
      eofToken = iteratorResult.value;
      return iteratorResult.value;
    }

    return iteratorResult.value;
  };

  const ensureLookahead = (delta = 0): void => {
    while (lookahead.length <= delta) {
      if (eofToken) {
        lookahead.push(eofToken);
        continue;
      }

      lookahead.push(readNextToken());
    }
  };

  // MARK: Cursor
  /**
   * token at thec current position.
   *
   * Optional Delta parameter to peek further ahead,
   * e.g. cursor(1) will return the next token
   * without advancing the cursor.
   */
  const cursor = (delta = 0): Token => {
    ensureLookahead(delta);
    return lookahead[delta]!;
  };
  cursor.is = (...types: TokenKind[]): boolean => {
    const token = cursor();
    return types.includes(token.type);
  };
  cursor.consume = (): Token => {
    const token = cursor();
    lookahead.shift();
    return token;
  };
  cursor.consumeIf = (...types: TokenKind[]): Token | null => {
    const token = cursor();
    if (types.includes(token.type)) {
      return cursor.consume();
    }
    return null;
  };
  cursor.expect = (type: TokenKind, errorMessage: string): Token => {
    const token = cursor();
    if (token.type !== type) {
      throw new SIISyntaxError(errorMessage, token.loc);
    }
    return cursor.consume();
  };
  cursor.expectOneOf = (types: TokenKind[], errorMessage: string): Token => {
    const token = cursor();
    if (!types.includes(token.type)) {
      throw new SIISyntaxError(errorMessage, token.loc);
    }
    return cursor.consume();
  };
  cursor.while = (
    tokens: TokenKind | TokenKind[],
    fn: (token: Token) => void,
  ): void => {
    const tokenArr = Array.isArray(tokens) ? tokens : [tokens];
    while (true) {
      if (!cursor.is(...tokenArr)) {
        break;
      }

      fn(cursor.consume());
    }
  };
  cursor.skip = (...types: TokenKind[]): void =>
    cursor.while(types, () => null);

  const parseIdentifierLiteral = (token: Token): SII.Literal => {
    if (OWNER_POINTER_RE.test(token.value)) {
      return siiT.ownerPointer(token.value, token.loc);
    }

    if (LINK_POINTER_RE.test(token.value)) {
      return siiT.linkPointer(token.value, token.loc);
    }

    return siiT.tokenLiteral(token.value, token.loc);
  };

  // MARK: VECTOR LITERALS

  const parseNumericTuple = (): {
    values: string[];
    start: SII.Position;
    end: SII.Position;
  } => {
    const open = cursor.expect(
      TokenKind.LParen,
      ErrorCode.Syntax.ExpectedTupleStartParen,
    );
    const values: string[] = [];

    const first = cursor.expect(
      TokenKind.Number,
      ErrorCode.Syntax.ExpectedNumericTupleElement,
    );
    values.push(first.value);
    let end = first.loc.end;

    while (cursor.consumeIf(TokenKind.Comma)) {
      const item = cursor.expect(
        TokenKind.Number,
        ErrorCode.Syntax.ExpectedNumericTupleElementAfterComma,
      );
      values.push(item.value);
      end = item.loc.end;
    }

    const close = cursor.expect(
      TokenKind.RParen,
      ErrorCode.Syntax.ExpectedTupleCloseParen,
    );
    end = close.loc.end;

    return {
      values,
      start: open.loc.start,
      end,
    };
  };

  const parseParenthesizedLiteral = (): SII.Literal => {
    const firstTuple = parseNumericTuple();

    if (cursor.is(TokenKind.LParen)) {
      if (firstTuple.values.length !== 3) {
        throw new SIISyntaxError(
          ErrorCode.Syntax.PlacementLiteralPositionMustHave3,
          {
            start: firstTuple.start,
            end: firstTuple.end,
          },
        );
      }

      cursor.expect(
        TokenKind.LParen,
        ErrorCode.Syntax.ExpectedPlacementOrientationStartParen,
      );
      const oW = cursor.expect(
        TokenKind.Number,
        ErrorCode.Syntax.ExpectedPlacementOrientation({ orientation: "w" }),
      );
      cursor.expect(
        TokenKind.Semicolon,
        ErrorCode.Syntax.ExpectedSemicolonAfterOrientationW,
      );
      const oX = cursor.expect(
        TokenKind.Number,
        ErrorCode.Syntax.ExpectedPlacementOrientation({ orientation: "x" }),
      );
      cursor.expect(
        TokenKind.Comma,
        ErrorCode.Syntax.ExpectedCommaAfterOrientationX,
      );
      const oY = cursor.expect(
        TokenKind.Number,
        ErrorCode.Syntax.ExpectedPlacementOrientation({ orientation: "y" }),
      );
      cursor.expect(
        TokenKind.Comma,
        ErrorCode.Syntax.ExpectedCommaAfterOrientationY,
      );
      const oZ = cursor.expect(
        TokenKind.Number,
        ErrorCode.Syntax.ExpectedPlacementOrientation({ orientation: "z" }),
      );
      const close = cursor.expect(
        TokenKind.RParen,
        ErrorCode.Syntax.ExpectedPlacementLiteralCloseParen,
      );

      return siiT.placementLiteral(
        [
          [
            Number(firstTuple.values[0]),
            Number(firstTuple.values[1]),
            Number(firstTuple.values[2]),
          ],
          [
            Number(oW.value),
            Number(oX.value),
            Number(oY.value),
            Number(oZ.value),
          ],
        ],
        {
          start: firstTuple.start,
          end: close.loc.end,
        },
      );
    }

    const isFloat = firstTuple.values.every((part) =>
      FLOAT_LITERAL_RE.test(part),
    );
    const isNumber = firstTuple.values.every((part) =>
      INTEGER_LITERAL_RE.test(part),
    );

    if (!isFloat && !isNumber) {
      throw new SIISyntaxError(
        ErrorCode.Syntax.TupleLiteralMustBeUniformNumeric,
        {
          start: firstTuple.start,
          end: firstTuple.end,
        },
      );
    }

    switch (firstTuple.values.length) {
      case 2:
        return isFloat
          ? siiT.float2Literal([firstTuple.values[0]!, firstTuple.values[1]!], {
              start: firstTuple.start,
              end: firstTuple.end,
            })
          : siiT.number2Literal(
              [Number(firstTuple.values[0]), Number(firstTuple.values[1])],
              {
                start: firstTuple.start,
                end: firstTuple.end,
              },
            );
      case 3:
        return isFloat
          ? siiT.float3Literal(
              [
                firstTuple.values[0]!,
                firstTuple.values[1]!,
                firstTuple.values[2]!,
              ],
              {
                start: firstTuple.start,
                end: firstTuple.end,
              },
            )
          : siiT.number3Literal(
              [
                Number(firstTuple.values[0]),
                Number(firstTuple.values[1]),
                Number(firstTuple.values[2]),
              ],
              {
                start: firstTuple.start,
                end: firstTuple.end,
              },
            );
      case 4:
        return isFloat
          ? siiT.float4Literal(
              [
                firstTuple.values[0]!,
                firstTuple.values[1]!,
                firstTuple.values[2]!,
                firstTuple.values[3]!,
              ],
              {
                start: firstTuple.start,
                end: firstTuple.end,
              },
            )
          : siiT.number4Literal(
              [
                Number(firstTuple.values[0]),
                Number(firstTuple.values[1]),
                Number(firstTuple.values[2]),
                Number(firstTuple.values[3]),
              ],
              {
                start: firstTuple.start,
                end: firstTuple.end,
              },
            );
      default:
        throw new SIISyntaxError(
          ErrorCode.Syntax.ExpectedTupleLength({
            length: firstTuple.values.length,
          }),
          {
            start: firstTuple.start,
            end: firstTuple.end,
          },
        );
    }
  };

  // MARK: LITERALS

  const parseLiteral = (): SII.Literal => {
    const token = cursor();

    switch (token.type) {
      case TokenKind.String: {
        const stringToken = cursor.consume();
        return siiT.stringLiteral(stringToken.value, stringToken.loc);
      }
      case TokenKind.Number: {
        const numberToken = cursor.consume();
        return INTEGER_LITERAL_RE.test(numberToken.value)
          ? siiT.numberLiteral(Number(numberToken.value), numberToken.loc)
          : siiT.floatLiteral(numberToken.value, numberToken.loc);
      }
      case TokenKind.True: {
        const booleanToken = cursor.consume();
        return siiT.booleanLiteral(true, booleanToken.loc);
      }
      case TokenKind.False: {
        const falseToken = cursor.consume();
        return siiT.booleanLiteral(false, falseToken.loc);
      }
      case TokenKind.Identifier: {
        const identifierToken = cursor.consume();
        return parseIdentifierLiteral(identifierToken);
      }
      case TokenKind.LParen:
        return parseParenthesizedLiteral();
      default:
        throw new SIISyntaxError(
          ErrorCode.Syntax.UnexpectedTokenInAttributeLiteral({
            token: token.value,
          }),
          token.loc,
        );
    }
  };

  // MARK: ATTRIBUTE

  const parseAttribute = (unitBuilder: SIIUnitBuilder): void => {
    const keyToken = cursor.expectOneOf(
      [TokenKind.Identifier, TokenKind.String],
      ErrorCode.Syntax.ExpectedAttributeKeyIdentifier,
    );
    const keyId = siiT.identifier(keyToken.value, keyToken.loc);

    let isArrayMember = false;
    let arrayIndex: number | null = null;

    if (cursor.consumeIf(TokenKind.LBracket)) {
      isArrayMember = true;
      if (!cursor.consumeIf(TokenKind.RBracket)) {
        const indexToken = cursor.expect(
          TokenKind.Number,
          ErrorCode.Syntax.ExpectedArrayIndexNumberOrDynamicClose,
        );
        if (!ARRAY_INDEX_RE.test(indexToken.value)) {
          throw new SIISyntaxError(
            ErrorCode.Syntax.InvalidArrayIndex({ value: indexToken.value }),
            indexToken.loc,
          );
        }

        arrayIndex = Number(indexToken.value);
        cursor.expect(
          TokenKind.RBracket,
          ErrorCode.Syntax.ExpectedCloseBracketAfterArrayIndex,
        );
      }
    }

    cursor.expect(
      TokenKind.Colon,
      ErrorCode.Syntax.ExpectedColonAfterAttributeKey,
    );
    if (cursor.is(TokenKind.Newline, TokenKind.RBrace, TokenKind.EOF)) {
      throw new SIISyntaxError(
        ErrorCode.Syntax.ExpectedAttributeValue,
        keyToken.loc,
      );
    }

    const literal = parseLiteral();

    if (!cursor.is(TokenKind.Newline, TokenKind.RBrace, TokenKind.EOF)) {
      const next = cursor();

      throw new SIISyntaxError(
        ErrorCode.Syntax.UnexpectedTrailingTokensInAttributeValue,
        next.loc,
      );
    }

    if (isArrayMember) {
      if (arrayIndex === null) {
        unitBuilder.appendDynamicArrayAttribute(keyId, literal);
      } else {
        unitBuilder.appendFixedArrayElement(keyId, arrayIndex, literal);
      }
    } else {
      unitBuilder.appendLiteralAttribute(keyId, literal);
    }

    cursor.skip(TokenKind.Newline);
  };

  // MARK: UNIT

  const parseUnit = (): SII.Unit => {
    const className = cursor.expectOneOf(
      [TokenKind.Identifier, TokenKind.String],
      ErrorCode.Syntax.ExpectedUnitClassNameIdentifier,
    );

    cursor.expect(
      TokenKind.Colon,
      ErrorCode.Syntax.ExpectedColonBetweenUnitClassAndName,
    );
    const unitName = cursor.expectOneOf(
      [TokenKind.Identifier, TokenKind.String],
      ErrorCode.Syntax.ExpectedUnitNameIdentifier,
    );
    cursor.expect(TokenKind.LBrace, ErrorCode.Syntax.ExpectedUnitBodyOpenBrace);

    const unitBuilder = new SIIUnitBuilder(
      siiT.identifier(className.value, className.loc),
      siiT.identifier(unitName.value, unitName.loc),
      className.loc.start,
    );

    cursor.skip(TokenKind.Newline);

    while (!cursor.is(TokenKind.RBrace)) {
      if (cursor.is(TokenKind.EOF)) {
        throw new SIISyntaxError(
          ErrorCode.Syntax.UnexpectedEndOfFile({
            context: "parsing a unit body (expected '}')",
          }),
          cursor().loc,
        );
      }

      parseAttribute(unitBuilder);
    }

    const closeBrace = cursor.expect(
      TokenKind.RBrace,
      ErrorCode.Syntax.ExpectedUnitBodyCloseBrace,
    );

    unitBuilder.close(closeBrace.loc.end);
    return unitBuilder.build();
  };

  // MARK: START OF FILE

  const siiToken = cursor.expect(
    TokenKind.SiiNunit,
    ErrorCode.Syntax.ExpectedFileStartMarker,
  );
  const currentFile = new SIIFileBuilder(siiToken.loc.start);

  cursor.skip(TokenKind.Newline);
  cursor.expect(
    TokenKind.LBrace,
    ErrorCode.Syntax.ExpectedFileOpenBraceAfterSiiNunit,
  );
  cursor.skip(TokenKind.Newline);

  while (!cursor.is(TokenKind.RBrace)) {
    if (cursor.is(TokenKind.EOF)) {
      throw new SIISyntaxError(
        ErrorCode.Syntax.UnexpectedEndOfFile({
          context: "parsing the SiiNunit file block (expected final '}')",
        }),
        cursor().loc,
      );
    }

    currentFile.append(parseUnit());

    cursor.skip(TokenKind.Newline);
  }

  const fileClose = cursor.expect(
    TokenKind.RBrace,
    ErrorCode.Syntax.ExpectedFileTerminatingBrace,
  );

  currentFile.close(fileClose.loc.end);

  cursor.skip(TokenKind.Newline);

  // MARK: END OF FILE
  cursor.expect(TokenKind.EOF, ErrorCode.Syntax.ExpectedEof);

  return currentFile.build();
}
