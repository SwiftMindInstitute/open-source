import { AnyTuple } from '../any/any-tuple'
import { LengthProp } from '../prop/length-prop'
import { EveryNatural } from './condition/every-natural'

/**
 * Evaluate `A + B`, where `A ∈ ℕ` and `B ∈ ℕ`
 * @group Math
 * @example
 * ```
 * type Ex1 = Add<1, 2> // 3
 * type Ex2 = Add<0, 5> // 5
 * ```
 */
export type Add<A extends number, B extends number> = EveryNatural<
  A,
  B
> extends true
  ? LengthProp<[...AnyTuple<A>, ...AnyTuple<B>]>
  : never

export {}
