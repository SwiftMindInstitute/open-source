import { AnyTuple } from '@any/any-tuple'
import { LengthProp } from 'prop/length-prop'
import { EveryNatural } from './condition/every-natural'

/**
 * Return the difference of `A - B`
 * @example
 * ```
 * type Ex1 = Subtract<10, 5> // 5
 * type Ex2 = Subtract<20, 13> // 7
 * ```
 */
export type Subtract<A extends number, B extends number> = EveryNatural<
  A,
  B
> extends true
  ? AnyTuple<A> extends [...infer C, ...AnyTuple<B>]
    ? LengthProp<C>
    : never
  : never
