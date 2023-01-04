import { And } from '../../logic/and'
import { Not } from '../../logic/not'
import { IsNonNegative } from './is-non-negative'
import { IsZero } from './is-zero'

/**
 * If `A > 0` then `true` else `false`
 * @example
 * ```
 * type Ex1 = IsPositive<-1> // false
 * type Ex2 = IsPositive<0> // false
 * type Ex3 = IsPositive<1> // true
 * ```
 */
export type IsPositive<A extends number> = And<Not<IsZero<A>>, IsNonNegative<A>>

export {}