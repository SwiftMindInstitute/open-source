import { Not } from '../../../logic'
import { LessThan } from './less-than'

/**
 * Evaluate `A ≥ B`, where `A ∈ ℕ` and `B ∈ ℕ`
 * @example
 * ```
 * type Ex1 = GreaterThanOrEqual<3, 1> // true
 * type Ex2 = GreaterThanOrEqual<3, 3> // true
 * type Ex3 = GreaterThanOrEqual<1, 3> // false
 * ```
 */
export type GreaterThanOrEqual<A extends number, B extends number> = Not<
  LessThan<A, B>
>

export {}
