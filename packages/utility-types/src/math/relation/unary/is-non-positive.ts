import { Or } from '../../../logic/relation/binary/or'
import { IsNegative } from './is-negative'
import { IsZero } from './is-zero'

/**
 * If `A ≤ 0` then `true` else `false`
 * @example
 * ```
 * type Ex1 = IsNonPositive<-1> // true
 * type Ex2 = IsNonPositive<0> // true
 * type Ex3 = IsNonPositive<1> // false
 * ```
 */
export type IsNonPositive<A extends number> = Or<IsZero<A>, IsNegative<A>>

export {}
