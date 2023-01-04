import { And } from '../logic/relation/binary/and'
import { Or } from '../logic/relation/binary/or'
import { IsNatural, IsZero } from './relation/unary'

/**
 * If both `A` and `B` are natural numbers then `true` else `false`
 * @internal
 * @example
 * ```
 * type Ex1 = AreNatural<-1, 0> // false
 * type Ex2 = AreNatural<0, -1> // false
 * type Ex3 = AreNatural<1, 2> // true
 * ```
 */
export type AreNatural<A extends number, B extends number> = And<
  IsNatural<A>,
  IsNatural<B>
>

/**
 * If `A ≡ 0` and `B ≡ 0` then `true` else `false`
 * @internal
 */
export type SomeZero<A extends number, B extends number> = Or<
  IsZero<A>,
  IsZero<B>
>
