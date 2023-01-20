import { AnyTuple } from '../any/any-tuple'
import { And } from '../logic/condition/and'
import { LengthProp } from '../object/length-prop'
import { IsNatural } from './condition/is-natural'

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
  ? [...AnyTuple<A>, ...AnyTuple<B>] extends [...infer C]
    ? LengthProp<C>
    : number
  : number
