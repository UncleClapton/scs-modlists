/**
 * SiiNunit files must follow this structure:
 *
 *
 * SiiNunit
 * {
 * base_class_name : .unit.name {
 *  string_property: "stringValue"
 *  another_string_property: anotherStringValue
 *  number_property: 123
 *  bool_property: true
 *  array_property: 2,
 *  array_property[0]: "firstValue"
 *  array_property[1]: "secondValue"
 * }
 * base_class_name : .another.unit.name {
 *  ...other_properties
 * }
 * }
 */

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace SII {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  export namespace Scalars {
    export type Token = string;
    export type String = string;
    export type OwnerPointer = string;
    export type LinkPointer = string;
    export type Number = number;
    export type Number2 = [number, number];
    export type Number3 = [number, number, number];
    export type Number4 = [number, number, number, number];
    export type Placement = [
      // (x, y, z)
      [number, number, number],
      // (w; x, y, z)
      [number, number, number, number],
    ];
    export type Float = string;
    export type Float2 = [string, string];
    export type Float3 = [string, string, string];
    export type Float4 = [string, string, string, string];

    export type Boolean = boolean;
  }

  export interface Position {
    line: number;
    column: number;
    offset: number;
  }

  export interface Location {
    start: Position;
    end: Position;
  }

  export interface BaseNode {
    type: string;
    loc: Location;
  }

  /**
   * Represents an identifier, which can be either a unit name, class name, or attribute key.
   */
  export interface Identifier extends BaseNode {
    type: "Identifier";
    value: string;
  }

  /**
   * Can Represent:
   *   - unqoted string literal. (this can happen sometimes)
   *   - token (satisfies `/^[a-z0-9_]{1,12}$/)
   *
   * The parser lacks the context to distinguish between these types,
   * so take care when interpreting this value.
   */
  export interface TokenLiteral extends BaseNode {
    type: "TokenLiteral";
    value: Scalars.Token;
  }

  /**
   * Represents one of:
   *   - string
   *   - resource_tie
   *
   * The parser lacks the context to distinguish between these types,
   * so take care when interpreting this value.
   *
   * In most cases the value should be interpreted as a string, unless it is clearly a resource path.
   */
  export interface StringLiteral extends BaseNode {
    type: "StringLiteral";
    value: Scalars.String;
  }

  export type StringLikeLiteral = TokenLiteral | StringLiteral;

  /**
   * Represents a reference to another unit in the same file.
   */
  export interface OwnerPointer extends BaseNode {
    type: "OwnerPointer";
    value: Scalars.OwnerPointer;
  }

  /**
   * Represents a reference to another unit in another file.
   */
  export interface LinkPointer extends BaseNode {
    type: "LinkPointer";
    value: Scalars.LinkPointer;
  }

  /**
   * Represents the "float" type.
   *
   * Value can be either:
   *   - a standard numeric float, e.g. `0.5`, `1.0`, `3.14`
   *   - An IEEE754 float represented as a hexadecimal string, e.g. `0x3f000000` (which is 0.5 in IEEE754)
   */
  export interface FloatLiteral extends BaseNode {
    type: "FloatLiteral";
    value: Scalars.Float;
  }

  /**
   * Represents a "float2" type.
   */
  export interface Float2Literal extends BaseNode {
    type: "Float2Literal";
    value: Scalars.Float2;
  }

  /**
   * Represents a "float3" type.
   */
  export interface Float3Literal extends BaseNode {
    type: "Float3Literal";
    value: Scalars.Float3;
  }

  /**
   * Can represent one of:
   *   - float4 (x, y, z, w)
   *   - quaternion (w, x, y, z)
   *
   * This parser lacks the context to distinguish between these types,
   * so take care when interpreting this value.
   */
  export interface Float4Literal extends BaseNode {
    type: "Float4Literal";
    value: Scalars.Float4;
  }

  /**
   * Can represent either:
   *   - fixed
   *   - s16
   *   - s32
   *   - s64
   *   - u16
   *   - u32
   *   - u64
   *
   * This parser lacks the context to distinguish between these types,
   * so take care when interpreting this value.
   */
  export interface NumberLiteral extends BaseNode {
    type: "NumberLiteral";
    value: Scalars.Number;
  }

  /**
   * Can represent either:
   *   - fixed2
   *   - int2
   *
   * This parser lacks the context to distinguish between these types,
   * so take care when interpreting this value.
   */
  export interface Number2Literal extends BaseNode {
    type: "Number2Literal";
    value: Scalars.Number2;
  }

  /**
   * Represents a "fixed3" type.
   */
  export interface Number3Literal extends BaseNode {
    type: "Number3Literal";
    value: Scalars.Number3;
  }

  /**
   * Represents a "fixed4" type.
   */
  export interface Number4Literal extends BaseNode {
    type: "Number4Literal";
    value: Scalars.Number4;
  }

  /**
   * Represents a "placement" literal.
   *
   * @example
   * (0, 0, 0) (1; 0, 0, 0)
   */
  export interface PlacementLiteral extends BaseNode {
    type: "PlacementLiteral";
    value: Scalars.Placement;
  }

  /**
   * Represents a boolean literal, which can be either `true` or `false`.
   */
  export interface BooleanLiteral extends BaseNode {
    type: "BooleanLiteral";
    value: Scalars.Boolean;
  }

  export type Literal =
    | TokenLiteral
    | StringLiteral
    | OwnerPointer
    | LinkPointer
    | FloatLiteral
    | Float2Literal
    | Float3Literal
    | Float4Literal
    | NumberLiteral
    | Number2Literal
    | Number3Literal
    | Number4Literal
    | PlacementLiteral
    | BooleanLiteral;

  export interface FixedArrayElement<
    T extends Literal = Literal,
  > extends BaseNode {
    type: "FixedArrayElement";
    key: Identifier;
    index: number;
    value: T;
  }

  export interface DynamicArrayElement<
    T extends Literal = Literal,
  > extends BaseNode {
    type: "DynamicArrayElement";
    key: Identifier;
    value: T;
  }

  export type ArrayElement = FixedArrayElement | DynamicArrayElement;

  export interface LiteralAttribute<
    T extends Literal = Literal,
  > extends BaseNode {
    type: "LiteralAttribute";
    key: Identifier;
    value: T;
  }

  export type FixedArrayDeclarationAttribute = LiteralAttribute<NumberLiteral>;

  export interface FixedArrayAttribute<
    T extends Literal = Literal,
  > extends BaseNode {
    type: "FixedArrayAttribute";
    key: Identifier;
    declaration: FixedArrayDeclarationAttribute;
    elements: FixedArrayElement<T>[];
  }

  export interface DynamicArrayAttribute<
    T extends Literal = Literal,
  > extends BaseNode {
    type: "DynamicArrayAttribute";
    key: Identifier;
    elements: DynamicArrayElement<T>[];
  }

  export type ArrayAttribute<T extends Literal = Literal> =
    | FixedArrayAttribute<T>
    | DynamicArrayAttribute<T>;

  export type Attribute<T extends Literal = Literal> =
    | LiteralAttribute<T>
    | ArrayAttribute<T>;

  export type RawValueOfLiteral<T extends Literal> = T["value"];

  export type RawValueOfAttribute<T extends Attribute> =
    T extends LiteralAttribute<infer L>
      ? L["value"]
      : T extends FixedArrayAttribute<infer L>
        ? L["value"][]
        : T extends DynamicArrayAttribute<infer L>
          ? L["value"][]
          : never;

  export interface Unit extends BaseNode {
    type: "Unit";
    name: Identifier;
    className: Identifier;
    attributes: Attribute[];
  }

  export interface File extends BaseNode {
    type: "File";
    units: Unit[];
  }

  export type Node =
    | File
    | Unit
    | Attribute
    | Literal
    | ArrayElement
    | Identifier;
}
