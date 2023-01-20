import { Not } from '../../logic/condition/not'
import { IsCaseInsensitive } from './is-case-insensitive'

/**
 * If `Lowercase<A> extends Uppercase<A>` then `true` else `false`
 * @beta
 * @group Condition
 * @group String
 * @example
 * ```
 * type Ex1 = IsCaseInsensitive<'?'> // true
 * type Ex2 = IsCaseInsensitive<'a'> // false
 * type Ex3 = IsCaseInsensitive<'A'> // false
 * ```
 */
export type IsCaseSensitive<A extends string> = Not<IsCaseInsensitive<A>>
