import { deepClone } from "~/lib/clone";
import type { SII } from "../ast";
import { compileSIIFile } from "../compiler";
import { parseSIIFile } from "../parser";
import { SiinUnit } from "./SiinUnit";

export class SiinDocument {
  private file: Readonly<SII.File>;

  /**
   * Creates a wrapped document from an AST file node.
   */
  constructor(file: SII.File) {
    this.file = deepClone(file);
  }

  /**
   * Returns the number of units in this document.
   */
  get size(): number {
    return this.file.units.length;
  }

  /**
   * Indicates whether this document has no units.
   */
  get isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * Finds all unique class names used in this document.
   *
   * A class name defines the data model of a unit, and may be used to infer its contents.
   *
   * data model classes should still perform strict type checking through the type-safe attribute accessors available
   * within a {@link SiinUnit}, even if the class name is validated.
   */
  getClassNames(): string[] {
    const classNames = new Set<string>();
    this.file.units.forEach((unit) => classNames.add(unit.className.value));
    return Array.from(classNames);
  }

  /**
   * Finds unit names for all units that match a class name.
   */
  findUnitNamesByClass(className: string): string[] {
    return this.file.units
      .filter((unit) => unit.className.value === className)
      .map((unit) => unit.name.value);
  }

  /**
   * Checks whether a unit with the given name exists.
   */
  hasUnit(name: string): boolean {
    return this.file.units.some((unit) => unit.name.value === name);
  }

  /**
   * Retrieves a unit from the document by its name.
   *
   * Names are often random and unknown ahead of time. To find a unit name,
   * it's best to first search by class name using `findUnitNamesByClass`,
   * then iterate over the names until you find a unit with the attributes you're looking for.
   */
  getUnit(name: string): SiinUnit | undefined {
    const unit = this.file.units.find((u) => u.name.value === name);
    return unit ? SiinUnit.from(unit) : undefined;
  }

  /**
   * Deletes a unit by name.
   */
  deleteUnit(name: string): boolean {
    const nextUnits = this.file.units.filter(
      (unit) => unit.name.value !== name,
    );
    if (nextUnits.length === this.file.units.length) {
      return false;
    }

    this.file = {
      ...this.file,
      units: nextUnits,
    };
    return true;
  }

  /**
   * Inserts or replaces a unit by name.
   */
  setUnit(unit: SII.Unit | SiinUnit) {
    const unitToSet = unit instanceof SiinUnit ? unit.unwrap() : unit;

    const existingUnitIndex = this.file.units.findIndex(
      (u) => u.name.value === unitToSet.name.value,
    );

    let newUnits: SII.Unit[];
    if (existingUnitIndex !== -1) {
      newUnits = [...this.file.units];
      newUnits[existingUnitIndex] = unitToSet;
    } else {
      newUnits = [...this.file.units, unitToSet];
    }

    this.file = {
      ...this.file,
      units: newUnits,
    };
  }

  /**
   * Returns a fully cloned AST file node.
   */
  unwrap(): SII.File {
    return deepClone(this.file);
  }

  /**
   * Creates a deep copy of this document.
   */
  clone(): SiinDocument {
    return SiinDocument.from(this.unwrap());
  }

  /**
   * Compiles the document into textual SII content.
   */
  toString(): string {
    return compileSIIFile(this.file);
  }

  /**
   * Converts this wrapped document into plain JSON-compatible data.
   */
  toJSON(): SII.File {
    return this.unwrap();
  }

  /**
   * Creates a wrapped document from an AST file node.
   */
  static from(file: SII.File): SiinDocument {
    return new SiinDocument(file);
  }

  /**
   * Parses textual SII content and wraps the resulting document.
   */
  static fromString(siiContent: string): SiinDocument {
    return SiinDocument.from(parseSIIFile(siiContent));
  }
}

(window as any).SiinDocument = SiinDocument;
