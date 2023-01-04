import { LessThan } from './less-than'

/**
 * Evaluate `A > B`, where `A ∈ ℕ` and `B ∈ ℕ`
 * @example
 * ```
 * type Ex1 = GreaterThan<3, 1> // true
 * type Ex2 = GreaterThan<1, 3> // false
 * ```
 */
export type GreaterThan<A extends number, B extends number> = LessThan<B, A>

export {}
