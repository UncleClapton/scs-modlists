import type { SII } from "./types";

const emptyLocation = (): SII.Location => location(0);
const location = (
  locOrPos: SII.Location | SII.Position | number = 0,
): SII.Location =>
  typeof locOrPos === "number"
    ? {
        start: { line: -1, column: -1, offset: locOrPos },
        end: { line: -1, column: -1, offset: locOrPos + 1 },
      }
    : "start" in locOrPos
      ? {
          start: { ...locOrPos.start },
          end: { ...locOrPos.end },
        }
      : {
          start: { ...locOrPos },
          end: {
            line: locOrPos.line,
            column: locOrPos.column + 1,
            offset: locOrPos.offset + 1,
          },
        };

const identifier = (
  value: string | SII.Identifier,
  loc?: SII.Location | SII.Position,
): SII.Identifier =>
  typeof value === "string"
    ? {
        type: "Identifier",
        value,
        loc: location(loc),
      }
    : value;

const stringLiteral = (
  value: string,
  loc?: SII.Location | SII.Position,
): SII.StringLiteral => ({
  type: "StringLiteral",
  value,
  loc: location(loc),
});

const tokenLiteral = (
  value: string,
  loc?: SII.Location | SII.Position,
): SII.TokenLiteral => ({
  type: "TokenLiteral",
  value,
  loc: location(loc),
});

const ownerPointer = (
  value: string,
  loc?: SII.Location | SII.Position,
): SII.OwnerPointer => ({
  type: "OwnerPointer",
  value,
  loc: location(loc),
});

const linkPointer = (
  value: string,
  loc?: SII.Location | SII.Position,
): SII.LinkPointer => ({
  type: "LinkPointer",
  value,
  loc: location(loc),
});

const floatLiteral = (
  value: string,
  loc?: SII.Location | SII.Position,
): SII.FloatLiteral => ({
  type: "FloatLiteral",
  value,
  loc: location(loc),
});
const float2Literal = (
  value: [string, string],
  loc?: SII.Location | SII.Position,
): SII.Float2Literal => ({
  type: "Float2Literal",
  value,
  loc: location(loc),
});
const float3Literal = (
  value: [string, string, string],
  loc?: SII.Location | SII.Position,
): SII.Float3Literal => ({
  type: "Float3Literal",
  value,
  loc: location(loc),
});
const float4Literal = (
  value: [string, string, string, string],
  loc?: SII.Location | SII.Position,
): SII.Float4Literal => ({
  type: "Float4Literal",
  value,
  loc: location(loc),
});

const numberLiteral = (
  value: number,
  loc?: SII.Location | SII.Position,
): SII.NumberLiteral => ({
  type: "NumberLiteral",
  value,
  loc: location(loc),
});
const number2Literal = (
  value: [number, number],
  loc?: SII.Location | SII.Position,
): SII.Number2Literal => ({
  type: "Number2Literal",
  value,
  loc: location(loc),
});
const number3Literal = (
  value: [number, number, number],
  loc?: SII.Location | SII.Position,
): SII.Number3Literal => ({
  type: "Number3Literal",
  value,
  loc: location(loc),
});
const number4Literal = (
  value: [number, number, number, number],
  loc?: SII.Location | SII.Position,
): SII.Number4Literal => ({
  type: "Number4Literal",
  value,
  loc: location(loc),
});

const placementLiteral = (
  value: [[number, number, number], [number, number, number, number]],
  loc?: SII.Location | SII.Position,
): SII.PlacementLiteral => ({
  type: "PlacementLiteral",
  value,
  loc: location(loc),
});

const booleanLiteral = (
  value: boolean,
  loc?: SII.Location | SII.Position,
): SII.BooleanLiteral => ({
  type: "BooleanLiteral",
  value,
  loc: location(loc),
});

const fixedArrayElement = <T extends SII.Literal>(
  key: string | SII.Identifier,
  index: number,
  value: T,
  loc?: SII.Location | SII.Position,
): SII.FixedArrayElement<T> => ({
  type: "FixedArrayElement",
  key: identifier(key),
  index,
  value,
  loc: location(loc),
});

const dynamicArrayElement = <T extends SII.Literal>(
  key: string | SII.Identifier,
  value: T,
  loc?: SII.Location | SII.Position,
): SII.DynamicArrayElement<T> => ({
  type: "DynamicArrayElement",
  key: identifier(key),
  value,
  loc: location(loc),
});

const fixedArrayAttribute = <T extends SII.Literal>(
  key: string | SII.Identifier,
  declarationOrSize: number | SII.LiteralAttribute<SII.NumberLiteral>,
  elements: SII.FixedArrayElement<T>[],
  loc?: SII.Location | SII.Position,
): SII.FixedArrayAttribute<T> => ({
  type: "FixedArrayAttribute",
  key: identifier(key),
  declaration:
    typeof declarationOrSize === "number"
      ? siiT.literalAttribute(key, siiT.numberLiteral(declarationOrSize))
      : declarationOrSize,
  elements,
  loc: location(loc),
});

const dynamicArrayAttribute = <T extends SII.Literal>(
  key: string | SII.Identifier,
  elements: SII.DynamicArrayElement<T>[],
  loc?: SII.Location | SII.Position,
): SII.DynamicArrayAttribute<T> => ({
  type: "DynamicArrayAttribute",
  key: identifier(key),
  elements,
  loc: location(loc),
});

const literalAttribute = <T extends SII.Literal>(
  key: string | SII.Identifier,
  value: T,
  loc?: SII.Location | SII.Position,
): SII.LiteralAttribute<T> => ({
  type: "LiteralAttribute",
  key: identifier(key),
  value,
  loc: location(loc),
});

const unit = (
  name: string | SII.Identifier,
  className: string | SII.Identifier,
  attributes: SII.Attribute[],
  loc?: SII.Location,
): SII.Unit => ({
  type: "Unit",
  name: identifier(name),
  className: identifier(className),
  attributes,
  loc: location(loc),
});

const file = (units: SII.Unit[], loc?: SII.Location): SII.File => ({
  type: "File",
  units,
  loc: location(loc),
});

/**
 * A collection of generator functions to create SII file AST nodes.
 */
export const siiT = {
  file,
  unit,
  literalAttribute,
  fixedArrayAttribute,
  dynamicArrayAttribute,
  fixedArrayElement,
  dynamicArrayElement,
  identifier,
  location,
  emptyLocation,
  stringLiteral,
  booleanLiteral,
  floatLiteral,
  float2Literal,
  float3Literal,
  float4Literal,
  numberLiteral,
  number2Literal,
  number3Literal,
  number4Literal,
  placementLiteral,
  ownerPointer,
  linkPointer,
  tokenLiteral,
};
