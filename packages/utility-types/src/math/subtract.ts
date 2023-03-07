import { And } from '../logic/antecedent/and'
import { LengthProp } from '../object/length-prop'
import { Tuple } from '../tuple/tuple'
import { IsNatural } from './antecedent/is-natural'

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
  ? Tuple<A> extends [...infer C, ...Tuple<B>]
    ? LengthProp<C>
    : number
  : number
