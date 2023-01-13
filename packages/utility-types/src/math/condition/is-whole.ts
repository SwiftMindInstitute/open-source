import { Not } from '../../logic/condition/not'
import { IsDecimal } from './is-decimal'

/**
 * If `A ∈ ℤ` then `true` else `false`.
 * @group Condition
 * @group Math
 * @example
 * ```
 * type Ex1 = IsWhole<1>   // true
 * type Ex2 = IsWhole<2.3> // false
 * ```
 */
export type IsWhole<A extends number> = Not<IsDecimal<A>>

export {}
