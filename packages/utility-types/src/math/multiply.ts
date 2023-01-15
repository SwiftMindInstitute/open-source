import { IsZero } from '../identity/condition/is-number-additive-identity'
import { And } from '../logic/condition/and'
import { Add } from './add'
import { IsNatural } from './condition/is-natural'
import { Subtract } from './subtract'

/**
 * Repeated addition utility function used in multiplication
 * @group Math
 * @internal
 */
type MultiAdd<
  A extends number,
  B extends number,
  C extends number = 0
> = IsZero<B> extends true
  ? C
  : Add<A, C> extends number
  ? MultiAdd<A, Subtract<B, 1>, Add<A, C>>
  : never

/**
 * Return the product of `A * B`
 * @group Math
 * @example
 * ```
 * type Ex1 = Multiply<2, 3> // 6
 * type Ex2 = Multiply<5, 5> // 25
 * ```
 * */
export type Multiply<A extends number, B extends number> = And<
  IsNatural<A>,
  IsNatural<B>
> extends true
  ? MultiAdd<A, B>
  : number
