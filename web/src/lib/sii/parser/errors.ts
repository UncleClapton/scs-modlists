import { siiT, type SII } from "../ast";

type ErrorCodeArguments = {
  Lexical: {
    InvalidNumberLiteral: { value: string };
    UnexpectedCharacter: { char: string };
  };
  Syntax: {
    ArrayAlreadyDeclared: { key: string };
    ArrayIndexAlreadySet: { index: number; key: string };
    CannotMixFixedAndDynamicArrays: { key: string };
    DuplicateAttributeKey: { key: string };
    ExpectedPlacementOrientation: { orientation: "x" | "y" | "z" | "w" };
    ExpectedTupleLength: { length: number };
    InvalidArrayIndex: { value: string };
    MismatchedArrayKey: { expected: string; actual: string };
    MissingFixedArrayDeclaration: { key: string };
    MissingFixedArrayIndexValue: { index: number };
    UnexpectedEndOfFile: { context: string };
    UnexpectedTokenInAttributeLiteral: { token: string };
  };
};

export const ErrorCode = {
  Lexical: {
    InvalidNumberLiteral: ({ value }) => `Invalid number literal '${value}'`,
    UnexpectedCharacter: ({ char }) => `Unexpected character '${char}'`,
    UnexpectedMinus: "Unexpected '-'",
    UnterminatedBlockComment: "Unterminated block comment",
    UnterminatedStringLiteral: "Unterminated string literal",
    UnsupportedPreprocessorDirectiveAt:
      "Unsupported preprocessor directive '@'",
  },
  Syntax: {
    ArrayAlreadyDeclared: ({ key }) => `Array "${key}" is already declared.`,
    ArrayIndexAlreadySet: ({ index, key }) =>
      `Array index ${index} for array "${key}" is already set.`,
    CannotBuildDynamicArrayWithoutItems:
      "Cannot build dynamic array without items.",
    CannotMixFixedAndDynamicArrays: ({ key }) =>
      `Cannot mix fixed and dynamic array entries for array "${key}".`,
    DuplicateAttributeKey: ({ key }) => `Duplicate attribute key "${key}".`,
    ExpectedArrayIndexNumberOrDynamicClose:
      "Expected array index number or closing ']' for dynamic array",
    ExpectedAttributeKeyIdentifier: "Expected attribute key identifier",
    ExpectedAttributeValue: "Expected attribute value",
    ExpectedCloseBracketAfterArrayIndex:
      "Expected closing ']' after array index",
    ExpectedColonAfterAttributeKey: "Expected ':' after attribute key",
    ExpectedColonBetweenUnitClassAndName:
      "Expected ':' between unit class and unit name",
    ExpectedCommaAfterOrientationX:
      "Expected ',' after placement orientation x component",
    ExpectedCommaAfterOrientationY:
      "Expected ',' after placement orientation y component",
    ExpectedEof: "Unexpected trailing tokens after file end",
    ExpectedFileOpenBraceAfterSiiNunit:
      'Expected "{" after "SiiNunit" declaration',
    ExpectedFileStartMarker: 'Expected "SiiNunit" marker at file start',
    ExpectedFileTerminatingBrace: 'Expected "}" to close SiiNunit block',
    ExpectedNumericTupleElement: "Expected numeric tuple element",
    ExpectedNumericTupleElementAfterComma:
      "Expected numeric tuple element after ','",
    ExpectedPlacementLiteralCloseParen:
      "Expected ')' to close placement literal",
    ExpectedPlacementOrientationStartParen:
      "Expected '(' to start placement orientation tuple",
    ExpectedPlacementOrientation: ({ orientation }) =>
      `Expected placement orientation ${orientation} component`,
    ExpectedSemicolonAfterOrientationW:
      "Expected ';' after placement orientation w component",
    ExpectedTupleCloseParen: "Expected ')' to close tuple literal",
    ExpectedTupleLength: ({ length }) =>
      `Expected tuple with 2, 3 or 4 elements, but got ${length}`,
    ExpectedTupleStartParen: "Expected '(' to start a tuple literal",
    ExpectedUnitBodyCloseBrace: "Expected '}' to close unit body",
    ExpectedUnitBodyOpenBrace: "Expected '{' to open unit body",
    ExpectedUnitClassNameIdentifier: "Expected unit class name identifier",
    ExpectedUnitNameIdentifier: "Expected unit name identifier",
    InvalidArrayIndex: ({ value }) => `Invalid array index '${value}'`,
    MismatchedArrayKey: ({ expected, actual }) =>
      `Mismatched array key. Expected "${expected}", but got "${actual}".`,
    MissingFixedArrayDeclaration: ({ key }) =>
      `Missing declaration for array "${key}".`,
    MissingFixedArrayIndexValue: ({ index }) =>
      `Missing value for array index ${index}.`,
    PlacementLiteralPositionMustHave3:
      "Placement literal position must have exactly 3 elements",
    TupleLiteralMustBeUniformNumeric:
      "Tuple literal must contain either all integers or all floats",
    UnexpectedAttributeOutOfUnit: "Unexpected attribute out of unit.",
    UnexpectedEndOfFile: ({ context }) =>
      `Unexpected end of file while ${context}.`,
    UnexpectedExcessiveClosingBrace: "Unexpected excessive closing brace",
    UnexpectedTokenInAttributeLiteral: ({ token }) =>
      `Unexpected token '${token}' in attribute literal`,
    UnexpectedTrailingTokensInAttributeValue:
      "Unexpected trailing tokens in attribute value",
    UnexpectedUnitAfterFileClosingBrace:
      "Unexpected unit after file closing brace.",
    UnitAlreadyClosedCannotModify:
      "Unit is already closed. Cannot modify a closed unit.",
  },
} as const satisfies {
  [Category in keyof ErrorCodeArguments]: Record<
    string,
    string | ((args: never) => string)
  > & {
    [Code in keyof ErrorCodeArguments[Category]]: (
      args: ErrorCodeArguments[Category][Code],
    ) => string;
  };
};

export class SIISyntaxError extends Error {
  public readonly location: ReturnType<typeof siiT.location>;
  constructor(message: string, location: SII.Location | SII.Position) {
    const normalizedLocation = siiT.location(location);
    super(
      `Syntax Error [ln ${normalizedLocation.start.line}, col ${normalizedLocation.start.column}]: ${message}`,
    );

    this.location = normalizedLocation;
    this.name = "SyntaxError";
  }
}
