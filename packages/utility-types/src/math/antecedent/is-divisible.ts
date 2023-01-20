import { IsZero } from '../../identity/antecedent/is-number-additive-identity'
import { Modulo } from '../modulo'

/**
 * Evaluate `A % B === 0`, where `A ∈ ℕ` and `B ∈ ℕ`
 * @beta
 * @group Antecedent
 * @group Math
 * @example
 * ```
 * type Ex1 = IsDivisble<9, 3>   // true
 * type Ex2 = IsDivisible<11, 3> // false
 * ```
 */
export type IsDivisible<A extends number, B extends number> = IsZero<
  Modulo<A, B>
>
