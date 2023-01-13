import { And } from '@logic/condition/and'
import { IsNatural } from './is-natural'

/**
 * If both `A` and `B` are natural numbers then `true` else `false`
 * @internal
 * @example
 * ```
 * type Ex1 = EveryNatural<-1, 0> // false
 * type Ex2 = EveryNatural<0, -1> // false
 * type Ex3 = EveryNatural<1, 2> // true
 * ```
 */
export type EveryNatural<A extends number, B extends number> = And<
  IsNatural<A>,
  IsNatural<B>
>

export {}
