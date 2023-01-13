/**
 * The identity element for strings.
 *
 * Identity element under the following operation
 * ```
 * IsEqual<`abc${StringIdentity}`, `abc`> // true
 * ```
 * @group Identity
 * @example
 * ```
 * type Ex = StringIdentity // ''
 * ```
 */
export type StringIdentity = ''

/**
 * Alias of `StringIdentity`
 */
export type EmptyString = StringIdentity

export {}
