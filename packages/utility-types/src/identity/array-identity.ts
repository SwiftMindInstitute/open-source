/**
 * The identity element for arrays
 *
 * ```
 * IsEqual<[1, 2, 3, ...ArrayIdentity], [1, 2, 3]> // true
 * ```
 *
 * @example
 * ```
 * type Ex = ArrayIdentity // []
 * ```
 */
export type ArrayIdentity = []

/**
 * Alias of `ArrayIdentity`
 */
export type EmptyArray = ArrayIdentity

export {}
