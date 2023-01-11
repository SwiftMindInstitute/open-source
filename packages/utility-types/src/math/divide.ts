import { Add } from './add'
import { EveryNatural } from './condition/every-natural'
import { IsLessThan } from './condition/is-less-than'
import { Subtract } from './subtract'

/**
 * Repeated subtraction utility function used in division
 * @internal
 */
export type MultiSub<
  A extends number,
  B extends number,
  C extends number
> = IsLessThan<A, B> extends true
  ? C
  : Add<C, 1> extends number
  ? MultiSub<Subtract<A, B>, B, Add<C, 1>>
  : never

/**
 * Evaluate `A / B`, where `A ∈ ℕ` and `B ∈ ℕ`
 * @example
 * ```
 * type Ex1 = Divide<9, 3> // 3
 * // Note: mathematical operations only support the natural numbers
 * type Ex2 = Divide<11, 3> // 3
 * ```
 */
export type Divide<A extends number, B extends number> = EveryNatural<
  A,
  B
> extends true
  ? MultiSub<A, B, 0>
  : never
