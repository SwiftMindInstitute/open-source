import { Not } from '../../logic/antecedent/not'
import { IsCaseInsensitive } from './is-case-insensitive'

/**
 * If `Lowercase<A> extends Uppercase<A>` then `true` else `false`
 * @beta
 * @group Antecedent
 * @group String
 * @example
 * ```
 * type Ex1 = IsCaseSensitive<'a'> // true
 * type Ex2 = IsCaseSensitive<'A'> // true
 * type Ex3 = IsCaseSensitive<'?'> // false
 * ```
 */
export type IsCaseSensitive<A extends string> = Not<IsCaseInsensitive<A>>
