import { And } from '../../../logic/relation/binary/and'
import { IsNonNegative } from './is-non-negative'
import { IsWhole } from './is-whole'

/**
 * If `A ∈ ℕ` then `true` else `false`
 * @example
 * ```
 * type Ex1 = IsNatural<-1> // false
 * type Ex2 = IsNatural<0> // true
 * type Ex3 = IsNatural<1> // true
 * type Ex4 = IsNatural<2.3> // false
 * ```
 */
export type IsNatural<A extends number> = And<IsNonNegative<A>, IsWhole<A>>
