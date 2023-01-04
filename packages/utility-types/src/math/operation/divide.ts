import { LessThan } from '../relation/less-than'
import { AreNatural } from '../utils'
import { Add } from './add'
import { Subtract } from './subtract'

/** Utility function used in division */
export type MultiSub<
  A extends number,
  B extends number,
  C extends number
> = LessThan<A, B> extends true
  ? C
  : Add<C, 1> extends number
  ? MultiSub<Subtract<A, B>, B, Add<C, 1>>
  : never

/** Return the quotient of `A / B` as a natural number */
export type Divide<A extends number, B extends number> = AreNatural<
  A,
  B
> extends true
  ? MultiSub<A, B, 0>
  : never
