/**
 * The identity element for objects
 *
 * ```
 * IsEqual<{a: true} & ObjectIdenity, {a: true}> // true
 * ```
 *
 * @example
 * ```
 * type Ex = ObjectIdenity // {}
 * ```
 */
export type ObjectIdenity = {}

/**
 * Alias of `ObjectIdenity`
 */
export type EmptyObject = ObjectIdenity

export {}
