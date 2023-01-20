/**
 * The identity element for strings.
 *
 * Identity element under the following operation
 * ```
 * IsEqual<`abc${StringIdentity}`, `abc`> // true
 * ```
 * @beta
 * @group Identity
 * @example
 * ```
 * type Ex = StringIdentity // ''
 * ```
 */
export type StringConcatIdentity = ''

/**
 * Alias of `StringIdentity`
 * @beta
 * @group Identity
 */
export type EmptyString = StringConcatIdentity
