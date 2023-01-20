import { Not } from '../../logic/condition/not'
import { IsLessThan } from './is-less-than'

/**
 * Evaluate `A ≥ B`, where `A ∈ ℕ` and `B ∈ ℕ`
 * @beta
 * @group Condition
 * @group Math
 * @example
 * ```
 * type Ex1 = IsGreaterThanOrEqual<3, 1> // true
 * type Ex2 = IsGreaterThanOrEqual<3, 3> // true
 * type Ex3 = IsGreaterThanOrEqual<1, 3> // false
 * ```
 */
export type IsGreaterThanOrEqual<A extends number, B extends number> = Not<
  IsLessThan<A, B>
>
