import { IsExtension } from '../../any/antecedent/is-extension'

/**
 * If `A` is capitalized then `true` else `false`
 * @beta
 * @group Antecedent
 * @group String
 * @example
 * ```
 * type Ex1 = IsCapitalized<'Hello'> // true
 * type Ex2 = IsCapitalized<'hello'> // false
 * type Ex3 = IsCapitalized<'?'>     // false
 * ```
 */
export type IsCapitalized<A extends string> = IsExtension<A, Capitalize<A>>
