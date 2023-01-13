/**
 * The identity element for arrays
 *
 * Identity element under the following operation
 * ```
 * IsEqual<[1, 2, 3, ...ArrayIdentity], [1, 2, 3]> // true
 * ```
 * @group Identity
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
