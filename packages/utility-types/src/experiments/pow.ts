import { Multiply } from '../math/multiply'
import { Subtract } from '../math/subtract'

/**
 * Evaluate `A ** B`
 *
 * > The performance on this type is TERRIBLE TypeScript has to create a new
 * > array on every addition operation.
 *
 * @experimental
 * @group Math
 * @example
 * ```
 * type Ex = Pow<2, 8> // 256
 * ```
 */
export type Pow<
  A extends number,
  B extends number,
  C extends number = 1
> = B extends 0 ? C : Pow<A, Subtract<B, 1>, Multiply<A, C>>

export {}
