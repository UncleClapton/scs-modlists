export function deepClone<T>(value: T): T {
  if (Array.isArray(value)) {
    return value.map((entry) => deepClone(entry)) as T;
  }

  if (value !== null && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, deepClone(entry)]),
    ) as T;
  }

  return value;
}
