import { And } from '../../logic/condition/and'
import { IsInteger } from './is-integer'
import { IsNonNegative } from './is-non-negative'

/**
 * If `A ∈ ℕ` then `true` else `false`
 * @beta
 * @group Condition
 * @group Math
 * @example
 * ```
 * type Ex1 = IsNatural<-1>  // false
 * type Ex2 = IsNatural<0>   // true
 * type Ex3 = IsNatural<1>   // true
 * type Ex4 = IsNatural<2.3> // false
 * ```
 */
export type IsNatural<A extends number> = And<IsNonNegative<A>, IsInteger<A>>
