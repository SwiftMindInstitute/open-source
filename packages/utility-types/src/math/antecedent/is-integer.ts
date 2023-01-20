import { Not } from '../../logic/antecedent/not'
import { IsFloat } from './is-float'

/**
 * If `A ∈ ℤ` then `true` else `false`.
 * @beta
 * @group Antecedent
 * @group Math
 * @example
 * ```
 * type Ex1 = IsInteger<1>   // true
 * type Ex2 = IsInteger<2.3> // false
 * ```
 */
export type IsInteger<A extends number> = Not<IsFloat<A>>
