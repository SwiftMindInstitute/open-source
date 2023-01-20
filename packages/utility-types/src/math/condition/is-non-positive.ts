import { IsZero } from '../../identity/condition/is-number-additive-identity'
import { Or } from '../../logic/condition/or'
import { IsNegative } from './is-negative'

/**
 * If `A ≤ 0` then `true` else `false`
 * @beta
 * @group Condition
 * @group Math
 * @example
 * ```
 * type Ex1 = IsNonPositive<-1> // true
 * type Ex2 = IsNonPositive<0>  // true
 * type Ex3 = IsNonPositive<1>  // false
 * ```
 */
export type IsNonPositive<A extends number> = Or<IsZero<A>, IsNegative<A>>
