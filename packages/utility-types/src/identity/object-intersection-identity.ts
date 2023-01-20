/**
 * The identity element for objects
 *
 * Identity element under the following operation
 * ```
 * IsEqual<{a: true} & ObjectIdenity, {a: true}> // true
 * ```
 * @beta
 * @group Identity
 * @example
 * ```
 * type Ex = ObjectIdenity // {}
 * ```
 */
export type ObjectIntersectionIdenity = {}

/**
 * Alias of `ObjectIdenity`
 * @beta
 * @group Identity
 */
export type EmptyObject = ObjectIntersectionIdenity
