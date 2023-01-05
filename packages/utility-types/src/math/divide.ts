import { Add } from './add'
import { EveryNatural } from './condition/every-natural'
import { LessThan } from './condition/less-than'
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
export type Divide<A extends number, B extends number> = EveryNatural<
  A,
  B
> extends true
  ? MultiSub<A, B, 0>
  : never
