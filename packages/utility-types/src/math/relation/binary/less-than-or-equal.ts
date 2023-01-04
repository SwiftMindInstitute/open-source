import { Not } from '../../../logic/relation/unary/not'
import { GreaterThan } from './greater-than'

/**
 * Evaluate `A ≤ B`, where `A ∈ ℕ` and `B ∈ ℕ`
 * @example
 * ```
 * type Ex1 = LessThanOrEqual<3, 1> // true
 * type Ex2 = LessThanOrEqual<3, 3> // true
 * type Ex3 = LessThanOrEqual<1, 3> // false
 * ```
 */
export type LessThanOrEqual<A extends number, B extends number> = Not<
  GreaterThan<A, B>
>

export {}
