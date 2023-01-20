import { IsZero } from '../../identity/condition/is-number-additive-identity'
import { And } from '../../logic/condition/and'
import { Not } from '../../logic/condition/not'
import { IsNonNegative } from './is-non-negative'

/**
 * If `A > 0` then `true` else `false`
 * @beta
 * @group Condition
 * @group Math
 * @example
 * ```
 * type Ex1 = IsPositive<-1> // false
 * type Ex2 = IsPositive<0>  // false
 * type Ex3 = IsPositive<1>  // true
 * ```
 */
export type IsPositive<A extends number> = And<Not<IsZero<A>>, IsNonNegative<A>>
