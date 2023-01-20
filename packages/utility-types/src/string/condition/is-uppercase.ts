import { IsExtension } from '../../any/condition/is-extension'

/**
 * If `A` is uppercase then `true` else `false`
 * @beta
 * @group Condition
 * @group String
 * @example
 * ```
 * type Ex1 = IsUppercase<'Hello'> // true
 * type Ex2 = IsUppercase<'hello'> // false
 * type Ex3 = IsUppercase<'?'>     // false
 * ```
 */
export type IsUppercase<A extends string> = IsExtension<A, Uppercase<A>>
