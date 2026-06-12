import { siiG } from "./ast/guards";
import type { SII } from "./ast/types";

function compileSIILiteral(node: SII.Literal): string {
  switch (node.type) {
    case "StringLiteral":
      return /^[a-zA-Z0-9_]+$/.test(node.value)
        ? node.value
        : `"${node.value}"`;

    case "TokenLiteral":
    case "OwnerPointer":
    case "LinkPointer":
    case "BooleanLiteral":
    case "FloatLiteral":
      return String(node.value);

    case "Float2Literal":
    case "Float3Literal":
    case "Float4Literal":
      return `(${node.value.join(", ")})`;

    case "NumberLiteral":
      return node.value.toFixed(0);

    case "Number2Literal":
    case "Number3Literal":
    case "Number4Literal":
      return `(${node.value.map((it) => it.toFixed(0)).join(", ")})`;

    case "PlacementLiteral": {
      const [position, orientation] = node.value;
      const [oW, oX, oY, oZ] = orientation;
      return `(${position.join(", ")}) (${oW}; ${oX}, ${oY}, ${oZ})`;
    }
  }
}

function compileSIIArrayEntry(
  element: SII.FixedArrayElement | SII.DynamicArrayElement,
): string {
  // dynamic arrays still use '[]' to denote array member, but never include an index.
  return ` ${element.key.value}[${(element as SII.FixedArrayElement).index ?? ""}]: ${compileSIILiteral(element.value)}`;
}

function compileSIIDynamicArray(attribute: SII.DynamicArrayAttribute): string {
  return attribute.elements.map((el) => compileSIIArrayEntry(el)).join("\n");
}

function compileSIIFixedArray(attribute: SII.FixedArrayAttribute): string {
  const lines = [];

  lines.push(
    ` ${attribute.declaration.key.value}: ${attribute.declaration.value.value}`,
  );
  attribute.elements.forEach((element) => {
    lines.push(compileSIIArrayEntry(element));
  });

  return lines.join("\n");
}

function compileSIIAttribute(attribute: SII.Attribute): string {
  if (siiG.isFixedArrayAttribute(attribute)) {
    return compileSIIFixedArray(attribute);
  }

  if (siiG.isDynamicArrayAttribute(attribute)) {
    return compileSIIDynamicArray(attribute);
  }

  return ` ${attribute.key.value}: ${compileSIILiteral(attribute.value)}`;
}

function compileSIIUnit(unit: SII.Unit): string {
  return `${unit.className.value} : ${unit.name.value} {
${unit.attributes.map((attribute) => compileSIIAttribute(attribute)).join("\n")}
}`;
}

export function compileSIIFile(siiFile: SII.File): string {
  return `SiiNunit
{
${siiFile.units.map((unit) => compileSIIUnit(unit)).join("\n")}

}
`.replace(/\r?\n/g, "\r\n"); // for consistent application of Windows-style line endings, replace all line breaks with \r\n
}
