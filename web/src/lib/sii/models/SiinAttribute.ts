import { deepClone } from "~/lib/clone";
import { siiG, type LiteralNodeGuard, type SII } from "../ast";

export class SiinAttribute<T extends SII.Attribute = SII.Attribute> {
  private attribute: Readonly<T>;

  /**
   * Returns the attribute node type.
   */
  get type(): T["type"] {
    return this.attribute.type;
  }

  /**
   * Returns the attribute key as a plain string.
   */
  get key(): string {
    return this.attribute.key.value;
  }

  /**
   * Returns the raw attribute value as plain data.
   */
  get value(): SII.RawValueOfAttribute<T> {
    const attribute: Readonly<SII.Attribute> = this.attribute;
    switch (attribute.type) {
      case "LiteralAttribute":
        return deepClone(attribute.value.value) as SII.RawValueOfAttribute<T>;

      case "DynamicArrayAttribute":
      case "FixedArrayAttribute":
        return attribute.elements.map((el) =>
          deepClone(el.value.value),
        ) as SII.RawValueOfAttribute<T>;
    }
  }

  /**
   * Creates a wrapped attribute from an AST attribute node.
   */
  constructor(attribute: T) {
    this.attribute = deepClone(attribute);
  }

  /**
   * Returns a deep-cloned AST attribute node.
   */
  unwrap(): T {
    return deepClone(this.attribute);
  }

  /**
   * Creates a deep copy of this wrapped attribute.
   */
  clone(): SiinAttribute<T> {
    return SiinAttribute.from(this.unwrap());
  }

  /**
   * Converts this wrapped attribute into plain JSON-compatible data.
   */
  toJSON(): T {
    return this.unwrap();
  }

  /**
   * Checks whether this attribute is a literal attribute.
   */
  isLiteralAttribute(): this is SiinAttribute<SII.LiteralAttribute>;
  isLiteralAttribute<T extends SII.Literal>(
    valueGuard: LiteralNodeGuard<T>,
  ): this is SiinAttribute<SII.LiteralAttribute<T>>;
  isLiteralAttribute(valueGuard?: LiteralNodeGuard): boolean {
    return siiG.isLiteralAttribute(this.attribute, valueGuard as never);
  }

  /**
   * Checks whether this attribute is a fixed array attribute.
   */
  isFixedArrayAttribute(): this is SiinAttribute<SII.FixedArrayAttribute>;
  isFixedArrayAttribute<T extends SII.Literal>(
    elementGuard: LiteralNodeGuard<T>,
  ): this is SiinAttribute<SII.FixedArrayAttribute<T>>;
  isFixedArrayAttribute(elementGuard?: LiteralNodeGuard): boolean {
    return siiG.isFixedArrayAttribute(this.attribute, elementGuard as never);
  }

  /**
   * Checks whether this attribute is a dynamic array attribute.
   */
  isDynamicArrayAttribute(): this is SiinAttribute<SII.DynamicArrayAttribute>;
  isDynamicArrayAttribute<T extends SII.Literal>(
    valueGuard: LiteralNodeGuard<T>,
  ): this is SiinAttribute<SII.DynamicArrayAttribute<T>>;
  isDynamicArrayAttribute(
    valueGuard?: LiteralNodeGuard,
  ): this is SiinAttribute<SII.DynamicArrayAttribute> {
    return siiG.isDynamicArrayAttribute(this.attribute, valueGuard as never);
  }

  /**
   * Creates a wrapped attribute from an AST attribute node.
   */
  static from<T extends SII.Attribute>(attribute: T): SiinAttribute<T> {
    return new SiinAttribute(attribute);
  }
}
