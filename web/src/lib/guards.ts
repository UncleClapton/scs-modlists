export function isPlainObject(
  obj: unknown,
): obj is Record<PropertyKey, unknown> {
  return typeof obj === "object" && obj !== null && !Array.isArray(obj);
}
