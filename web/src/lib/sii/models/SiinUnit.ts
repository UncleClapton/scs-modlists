import { deepClone } from "~/lib/clone";
import { SiinAttribute } from "./SiinAttribute";
import { siiG, type NodeGuard, type SII } from "../ast";

export class SiinUnit {
  private unit: Readonly<SII.Unit>;

  /**
   * Returns the number of attributes in this unit.
   */
  get size(): number {
    return this.unit.attributes.length;
  }

  /**
   * Indicates whether this unit has no attributes.
   */
  get isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * Returns the unit class name.
   */
  get className(): string {
    return this.unit.className.value;
  }

  /**
   * Returns the unit name.
   */
  get name(): string {
    return this.unit.name.value;
  }

  /**
   * Creates a wrapped unit from an AST unit node.
   */
  constructor(unit: SII.Unit) {
    this.unit = deepClone(unit);
  }

  /**
   * Checks whether an attribute with the given key exists.
   */
  hasAttribute(key: string): boolean {
    return this.unit.attributes.some((attr) => attr.key.value === key);
  }

  /**
   * Returns an attribute by key.
   */
  getAttribute(key: string): SiinAttribute | undefined {
    const attribute = this.#findAttribute(key);
    return attribute ? SiinAttribute.from(attribute) : undefined;
  }

  /**
   * Returns a literal attribute by key, optionally narrowed by a value guard.
   */
  getLiteralAttribute(
    key: string,
  ): SiinAttribute<SII.LiteralAttribute> | undefined;
  getLiteralAttribute<T extends SII.Literal>(
    key: string,
    valueGuard: NodeGuard<T>,
  ): SiinAttribute<SII.LiteralAttribute<T>> | undefined;
  getLiteralAttribute(
    key: string,
    valueGuard?: NodeGuard,
  ): SiinAttribute<SII.LiteralAttribute> | undefined {
    const attribute = this.#findAttribute(key);
    if (siiG.isLiteralAttribute(attribute, valueGuard as NodeGuard)) {
      return SiinAttribute.from(attribute);
    }
    return undefined;
  }

  /**
   * Returns a fixed array attribute by key, optionally narrowed by an element guard.
   */
  getFixedArrayAttribute(
    key: string,
  ): SiinAttribute<SII.FixedArrayAttribute> | undefined;
  getFixedArrayAttribute<T extends SII.Literal>(
    key: string,
    elementGuard: NodeGuard<T>,
  ): SiinAttribute<SII.FixedArrayAttribute<T>> | undefined;
  getFixedArrayAttribute(
    key: string,
    elementGuard?: NodeGuard,
  ): SiinAttribute<SII.FixedArrayAttribute> | undefined {
    const attribute = this.#findAttribute(key);
    if (siiG.isFixedArrayAttribute(attribute, elementGuard as NodeGuard)) {
      return SiinAttribute.from(attribute);
    }
    return undefined;
  }

  /**
   * Returns a dynamic array attribute by key, optionally narrowed by an element guard.
   */
  getDynamicArrayAttribute(
    key: string,
  ): SiinAttribute<SII.DynamicArrayAttribute> | undefined;
  getDynamicArrayAttribute<T extends SII.Literal>(
    key: string,
    elementGuard: NodeGuard<T>,
  ): SiinAttribute<SII.DynamicArrayAttribute<T>> | undefined;
  getDynamicArrayAttribute(
    key: string,
    elementGuard?: NodeGuard,
  ): SiinAttribute<SII.DynamicArrayAttribute> | undefined {
    const attribute = this.getAttribute(key);
    if (siiG.isDynamicArrayAttribute(attribute, elementGuard as NodeGuard)) {
      return SiinAttribute.from(attribute);
    }
    return undefined;
  }

  /**
   * Deletes an attribute by key.
   */
  deleteAttribute(key: string): boolean {
    const nextAttributes = this.unit.attributes.filter(
      (attribute) => attribute.key.value !== key,
    );
    if (nextAttributes.length === this.unit.attributes.length) {
      return false;
    }

    this.unit = {
      ...this.unit,
      attributes: nextAttributes,
    };
    return true;
  }

  /**
   * Inserts or replaces an attribute by key.
   */
  setAttribute(attribute: SII.Attribute | SiinAttribute) {
    const attrToSet =
      attribute instanceof SiinAttribute ? attribute.unwrap() : attribute;

    const existingAttributeIndex = this.unit.attributes.findIndex(
      (attr) => attr.key.value === attrToSet.key.value,
    );

    let newAttributes: SII.Attribute[];
    if (existingAttributeIndex !== -1) {
      newAttributes = [...this.unit.attributes];
      newAttributes[existingAttributeIndex] = attrToSet;
    } else {
      newAttributes = [...this.unit.attributes, attrToSet];
    }

    this.unit = {
      ...this.unit,
      attributes: newAttributes,
    };
  }

  /**
   * Returns a deep-cloned AST unit node.
   */
  unwrap(): SII.Unit {
    return deepClone(this.unit);
  }

  /**
   * Creates a deep copy of this wrapped unit.
   */
  clone(): SiinUnit {
    return SiinUnit.from(this.unwrap());
  }

  /**
   * Converts this wrapped unit into plain JSON-compatible data.
   */
  toJSON(): SII.Unit {
    return this.unwrap();
  }

  #findAttribute(key: string): SII.Attribute | undefined {
    return this.unit.attributes.find((attr) => attr.key.value === key);
  }

  /**
   * Creates a wrapped unit from an AST unit node.
   */
  static from(unit: SII.Unit): SiinUnit {
    return new SiinUnit(unit);
  }
}
