/**
 * If `A extends B` then `true` else `false`
 * @group Condition
 * @group Any
 * @example
 * ```
 * type Ex1 = IsExtension<['a', string]> // true
 * type Ex2 = IsExtension<[string, 'a']> // false
 * ```
 */
export type IsExtension<A, B> = A extends B ? true : false

export {}
