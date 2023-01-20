/**
 * A union of all TypeScript primitives
 * @beta
 * @group Any
 * @example
 * ```
 * type Ex = AnyObject<'test', AnyPrimitive> // { test: string | number | ... }
 * ```
 */
export type AnyPrimitive =
  | string
  | number
  | bigint
  | boolean
  | symbol
  | null
  | undefined
