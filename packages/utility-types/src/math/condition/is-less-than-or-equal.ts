import { Not } from '@logic/condition/not'
import { IsGreaterThan } from './is-greater-than'

/**
 * Evaluate `A ≤ B`, where `A ∈ ℕ` and `B ∈ ℕ`
 * @example
 * ```
 * type Ex1 = IsLessThanOrEqual<3, 1> // true
 * type Ex2 = IsLessThanOrEqual<3, 3> // true
 * type Ex3 = IsLessThanOrEqual<1, 3> // false
 * ```
 */
export type IsLessThanOrEqual<A extends number, B extends number> = Not<
  IsGreaterThan<A, B>
>

export {}
