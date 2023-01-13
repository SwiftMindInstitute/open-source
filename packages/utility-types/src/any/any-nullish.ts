/**
 * A union of values that satisfy `<A>(a: A) => a == null`
 * @group Any
 * @example
 * ```
 * type Ex = AnyObject<'test', AnyNullish> // { test: null | undefined }
 * ```
 */
export type AnyNullish = null | undefined

export {}
