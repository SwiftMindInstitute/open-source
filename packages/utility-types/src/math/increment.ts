import { One } from '../identity'
import { Add } from './add'
import { IsNatural } from './antecedent/is-natural'

/**
 * Evaluate `A + 1`, where `A ∈ ℕ`
 * @beta
 * @group Math
 * @example
 * ```
 * type Ex1 = Decrement<2> // 1
 * type Ex2 = Decrement<0> // number
 * ```
 */
export type Increment<A extends number> = IsNatural<A> extends true
  ? Add<A, One>
  : number
