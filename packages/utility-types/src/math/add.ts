import { And } from '../logic/antecedent/and'
import { LengthProp } from '../object/length-prop'
import { Tuple } from '../tuple/tuple'
import { IsNatural } from './antecedent/is-natural'

/**
 * Evaluate `A + B`, where `A ∈ ℕ` and `B ∈ ℕ`
 * @beta
 * @group Math
 * @example
 * ```
 * type Ex1 = Add<1, 2> // 3
 * type Ex2 = Add<0, 5> // 5
 * ```
 */
export type Add<A extends number, B extends number> = And<
  IsNatural<A>,
  IsNatural<B>
> extends true
  ? [...Tuple<A>, ...Tuple<B>] extends [...infer C]
    ? LengthProp<C>
    : number
  : number
