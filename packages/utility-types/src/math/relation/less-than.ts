import { SomeZero } from '../utils'

/**
 * Evaluate `A < B`, where `A ∈ ℕ` and `B ∈ ℕ`
 * @example
 * ```
 * type Ex1 = LessThan<1, 3> // true
 * type Ex2 = LessThan<3, 1> // false
 * ```
 */
export type LessThan<A extends number, B extends number> = SomeZero<A, B>

export {}
