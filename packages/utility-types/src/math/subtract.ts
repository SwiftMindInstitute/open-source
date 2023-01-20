import { AnyTuple } from '../any/any-tuple'
import { And } from '../logic/condition/and'
import { LengthProp } from '../object/length-prop'
import { IsNatural } from './condition/is-natural'

/**
 * Return the difference of `A - B`
 * @beta
 * @group Math
 * @example
 * ```
 * type Ex1 = Subtract<10, 5>  // 5
 * type Ex2 = Subtract<20, 13> // 7
 * ```
 */
export type Subtract<A extends number, B extends number> = And<
  IsNatural<A>,
  IsNatural<B>
> extends true
  ? AnyTuple<A> extends [...infer C, ...AnyTuple<B>]
    ? LengthProp<C>
    : number
  : number
