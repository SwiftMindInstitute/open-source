import { Not } from '@logic/condition/not'
import { IsNegative } from './is-negative'

/**
 * If `A ≥ 0` then `true` else `false`
 * @group Condition
 * @group Math
 * @example
 * ```
 * type Ex1 = IsNonNegative<-1> // false
 * type Ex2 = IsNonNegative<0> // true
 * type Ex3 = IsNonNegative<1> // true
 * ```
 */
export type IsNonNegative<A extends number> = Not<IsNegative<A>>

export {}
