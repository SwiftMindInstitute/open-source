import { AnyTuple } from '@any/any-tuple'
import { Length } from '@tuple/length'
import { EveryNatural } from './condition/every-natural'

/**
 * Evaluate `A + B`, Where `A ∈ ℕ` and `B ∈ ℕ`
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
  ? Length<[...AnyTuple<A>, ...AnyTuple<B>]>
  : never

export {}
