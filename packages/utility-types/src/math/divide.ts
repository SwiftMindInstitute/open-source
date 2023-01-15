import { And } from '../logic/condition/and'
import { Add } from './add'
import { IsLessThan } from './condition/is-less-than'
import { IsNatural } from './condition/is-natural'
import { Subtract } from './subtract'

/**
 * Repeated subtraction utility function used in division
 * @group Math
 * @internal
 */
type MultiSub<
  A extends number,
  B extends number,
  C extends number = 0
> = IsLessThan<A, B> extends true
  ? C
  : Add<C, 1> extends number
  ? MultiSub<Subtract<A, B>, B, Add<C, 1>>
  : never

/**
 * Evaluate `A / B`, where `A ∈ ℕ` and `B ∈ ℕ`
 * @group Math
 * @example
 * ```
 * type Ex1 = Divide<9, 3> // 3
 * type Ex2 = Divide<11, 3> // 3
 * ```
 */
export type Divide<A extends number, B extends number> = And<
  IsNatural<A>,
  IsNatural<B>
> extends true
  ? MultiSub<A, B>
  : number
