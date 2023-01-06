import { EveryNatural } from './condition/every-natural'
import { LessThan } from './condition/less-than'
import { Subtract } from './subtract'

/**
 * Evaluate `A % B`, where `A ∈ ℕ` and `B ∈ ℕ`
 * @example
 * ```
 * type Ex1 = Modulo<3, 2> // 1
 * type Ex2 = Modulo<4, 2> // 0
 * ```
 */
export type Modulo<A extends number, B extends number> = EveryNatural<
  A,
  B
> extends true
  ? LessThan<A, B> extends true
    ? A
    : Modulo<Subtract<A, B>, B>
  : never
