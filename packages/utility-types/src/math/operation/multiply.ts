import { AreNatural } from '../utils'
import { Add } from './add'
import { Subtract } from './subtract'

/** Utility function used in division */
type MultiAdd<
  A extends number,
  B extends number,
  C extends number
> = C extends 0
  ? B
  : Add<A, B> extends number
  ? MultiAdd<A, Add<A, B>, Subtract<C, 1>>
  : never

/** Return the product of `A * B` */
export type Multiply<A extends number, B extends number> = AreNatural<
  A,
  B
> extends true
  ? MultiAdd<A, 0, B>
  : never
