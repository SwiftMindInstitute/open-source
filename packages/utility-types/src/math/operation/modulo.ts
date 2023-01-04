import { LessThan } from '../relation/less-than'
import { AreNatural } from '../utils'
import { Subtract } from './subtract'

/** Return the `A % B` */
export type Modulo<A extends number, B extends number> = AreNatural<
  A,
  B
> extends true
  ? LessThan<A, B> extends true
    ? A
    : Modulo<Subtract<A, B>, B>
  : never
