import { Modulo } from '../modulo'
import { IsZero } from './is-zero'

/**
 * Evaluate `A % B === 0`, where `A ∈ ℕ` and `B ∈ ℕ`
 * @example
 * ```
 * type Ex1 = IsDivisble<9, 3> // true
 * type Ex2 = IsDivisible<11, 3> // false
 * ```
 */
export type IsDivisible<A extends number, B extends number> = IsZero<
  Modulo<A, B>
>

export {}
