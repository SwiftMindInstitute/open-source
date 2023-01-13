/**
 * The identity element for strings.
 *
 * ```
 * IsEqual<`abc${StringIdentity}`, `abc`> // true
 * ```
 *
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
