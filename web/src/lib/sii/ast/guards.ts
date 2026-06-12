import type { SII } from "./types";

type AnyNode = {
  type: string;
};

export type MaybeNode = AnyNode | null | undefined;

export type LiteralNodeGuard<T extends SII.Literal = SII.Literal> = (
  value: MaybeNode,
) => value is T;

export type NodeGuard<T extends SII.Node = SII.Literal> = (
  value: MaybeNode,
) => value is T;

const isSIIStringLiteral = (value: MaybeNode): value is SII.StringLiteral =>
  value?.type === "StringLiteral";

const isSIITokenLiteral = (value: MaybeNode): value is SII.TokenLiteral =>
  value?.type === "TokenLiteral";

const isSIIStringLikeLiteral = (
  value: MaybeNode,
): value is SII.StringLikeLiteral =>
  isSIIStringLiteral(value) || isSIITokenLiteral(value);

const isSIIOwnerPointer = (value: MaybeNode): value is SII.OwnerPointer =>
  value?.type === "OwnerPointer";

const isSIILinkPointer = (value: MaybeNode): value is SII.LinkPointer =>
  value?.type === "LinkPointer";

const isSIIFloatLiteral = (value: MaybeNode): value is SII.FloatLiteral =>
  value?.type === "FloatLiteral";
const isSIIFloat2Literal = (value: MaybeNode): value is SII.Float2Literal =>
  value?.type === "Float2Literal";
const isSIIFloat3Literal = (value: MaybeNode): value is SII.Float3Literal =>
  value?.type === "Float3Literal";
const isSIIFloat4Literal = (value: MaybeNode): value is SII.Float4Literal =>
  value?.type === "Float4Literal";

const isSIINumberLiteral = (value: MaybeNode): value is SII.NumberLiteral =>
  value?.type === "NumberLiteral";
const isSIINumber2Literal = (value: MaybeNode): value is SII.Number2Literal =>
  value?.type === "Number2Literal";
const isSIINumber3Literal = (value: MaybeNode): value is SII.Number3Literal =>
  value?.type === "Number3Literal";
const isSIINumber4Literal = (value: MaybeNode): value is SII.Number4Literal =>
  value?.type === "Number4Literal";

const isSIIPlacementLiteral = (
  value: MaybeNode,
): value is SII.PlacementLiteral => value?.type === "PlacementLiteral";

const isSIIBooleanLiteral = (value: MaybeNode): value is SII.BooleanLiteral =>
  value?.type === "BooleanLiteral";

const isSIIFixedArrayElement = (
  value: MaybeNode,
): value is SII.FixedArrayElement => value?.type === "FixedArrayElement";

const isSIIDynamicArrayElement = (
  value: MaybeNode,
): value is SII.DynamicArrayElement => value?.type === "DynamicArrayElement";

function isSIILiteralAttribute<T extends SII.Literal>(
  value: MaybeNode,
  valueGuard: LiteralNodeGuard<T>,
): value is SII.LiteralAttribute<T>;
function isSIILiteralAttribute(value: MaybeNode): value is SII.LiteralAttribute;
function isSIILiteralAttribute(
  value: MaybeNode,
  valueGuard?: LiteralNodeGuard,
): boolean {
  return (
    value?.type === "LiteralAttribute" &&
    (valueGuard ? valueGuard((value as SII.LiteralAttribute).value) : true)
  );
}

function isSIIFixedArrayAttribute<T extends SII.Literal>(
  value: MaybeNode,
  elementGuard: LiteralNodeGuard<T>,
): value is SII.FixedArrayAttribute<T>;
function isSIIFixedArrayAttribute(
  value: MaybeNode,
): value is SII.FixedArrayAttribute;
function isSIIFixedArrayAttribute(
  value: MaybeNode,
  elementGuard?: LiteralNodeGuard,
): boolean {
  return (
    value?.type === "FixedArrayAttribute" &&
    (elementGuard
      ? (value as SII.FixedArrayAttribute).elements.every((el) =>
          elementGuard(el.value),
        )
      : true)
  );
}
function isSIIDynamicArrayAttribute<T extends SII.Literal>(
  value: MaybeNode,
  elementGuard: LiteralNodeGuard<T>,
): value is SII.DynamicArrayAttribute<T>;
function isSIIDynamicArrayAttribute(
  value: MaybeNode,
): value is SII.DynamicArrayAttribute;
function isSIIDynamicArrayAttribute(
  value: MaybeNode,
  elementGuard?: LiteralNodeGuard,
): boolean {
  return (
    value?.type === "DynamicArrayAttribute" &&
    (elementGuard
      ? (value as SII.DynamicArrayAttribute).elements.every((el) =>
          elementGuard(el.value),
        )
      : true)
  );
}

const isSIIUnit = (value: MaybeNode): value is SII.Unit =>
  value?.type === "Unit";

const isSIIFile = (value: MaybeNode): value is SII.File =>
  value?.type === "File";

const or =
  <const T extends SII.Node>(...guards: [...NodeGuard<T>[]]) =>
  (value: MaybeNode): value is NoInfer<T> =>
    guards.some((guard) => guard(value));

/**
 * A collection of type guard functions to narrow down SII file AST node types.
 *
 * All nodes contain a `type` property that may be used for type narrowing, however these guards are provided regardless for readability.
 */
export const siiG = {
  or,
  isStringLiteral: isSIIStringLiteral,
  isTokenLiteral: isSIITokenLiteral,
  isStringLikeLiteral: isSIIStringLikeLiteral,
  isOwnerPointer: isSIIOwnerPointer,
  isLinkPointer: isSIILinkPointer,
  isFloatLiteral: isSIIFloatLiteral,
  isFloat2Literal: isSIIFloat2Literal,
  isFloat3Literal: isSIIFloat3Literal,
  isFloat4Literal: isSIIFloat4Literal,
  isNumberLiteral: isSIINumberLiteral,
  isNumber2Literal: isSIINumber2Literal,
  isNumber3Literal: isSIINumber3Literal,
  isNumber4Literal: isSIINumber4Literal,
  isPlacementLiteral: isSIIPlacementLiteral,
  isBooleanLiteral: isSIIBooleanLiteral,
  isFixedArrayElement: isSIIFixedArrayElement,
  isDynamicArrayElement: isSIIDynamicArrayElement,
  isFixedArrayAttribute: isSIIFixedArrayAttribute,
  isDynamicArrayAttribute: isSIIDynamicArrayAttribute,
  isLiteralAttribute: isSIILiteralAttribute,
  isUnit: isSIIUnit,
  isFile: isSIIFile,
};
