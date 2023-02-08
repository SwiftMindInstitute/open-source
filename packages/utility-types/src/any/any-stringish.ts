/**
 * A union of all TypeScript type that can be used in a string template
 * @alpha
 * @group Any
 * @example
 * ```
 * type Ex = `${AnyStringish}`
 * ```
 */
export type AnyStringish = string | number | bigint | boolean | null | undefined
