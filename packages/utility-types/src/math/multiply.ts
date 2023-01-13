import { Add } from './add'
import { EveryNatural } from './condition/every-natural'
import { Subtract } from './subtract'

/**
 * Repeated addition utility function used in multiplication
 * @group Math
 * @internal
 */
type MultiAdd<
  A extends number,
  B extends number,
  C extends number
> = C extends 0
  ? B
  : Add<A, B> extends number
  ? MultiAdd<A, Add<A, B>, Subtract<C, 1>>
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
export type Multiply<A extends number, B extends number> = EveryNatural<
  A,
  B
> extends true
  ? MultiAdd<A, 0, B>
  : never
