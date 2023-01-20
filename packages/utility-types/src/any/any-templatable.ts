/**
 * A union of all TypeScript type that can be used in a string template
 * @alpha
 * @group Any
 * @example
 * ```
 * type Ex = `${AnyTemplatable}`
 * ```
 */
export type AnyTemplatable =
  | string
  | number
  | bigint
  | boolean
  | null
  | undefined
