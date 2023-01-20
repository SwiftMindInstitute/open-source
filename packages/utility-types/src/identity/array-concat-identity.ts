/**
 * The identity element for arrays
 *
 * Identity element under the following operation
 * ```
 * IsEqual<[1, 2, 3, ...ArrayIdentity], [1, 2, 3]> // true
 * ```
 * @beta
 * @group Identity
 * @example
 * ```
 * type Ex = ArrayIdentity // []
 * ```
 */
export type ArrayConcatIdentity = []

/**
 * Alias of `ArrayIdentity`
 * @beta
 * @group Identity
 */
export type EmptyArray = ArrayConcatIdentity
