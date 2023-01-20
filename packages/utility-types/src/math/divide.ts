import { MultiSub } from '../helpers/multi-sub'
import { And } from '../logic/antecedent/and'
import { IsNatural } from './antecedent/is-natural'

/**
 * Evaluate `A / B`, where `A ∈ ℕ` and `B ∈ ℕ`
 * @beta
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
