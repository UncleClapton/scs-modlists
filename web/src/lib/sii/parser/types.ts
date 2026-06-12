import type { SII } from "../ast";

export const TokenKind = {
  LBrace: "LBrace",
  RBrace: "RBrace",
  Colon: "Colon",
  LBracket: "LBracket",
  RBracket: "RBracket",
  LParen: "LParen",
  RParen: "RParen",
  Comma: "Comma",
  Semicolon: "Semicolon",
  String: "String",
  Number: "Number",
  Identifier: "Identifier", // dotted identifier, e.g. .unit.name or trailer.wheel
  True: "True",
  False: "False",
  Newline: "Newline",
  EOF: "EOF",
  SiiNunit: "SiiNunit",
} as const satisfies Record<string, string>;
export type TokenKind = (typeof TokenKind)[keyof typeof TokenKind];

export interface Token {
  type: TokenKind;
  value: string;
  loc: SII.Location;
}
