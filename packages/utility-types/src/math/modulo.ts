import { EveryNatural } from './condition/every-natural'
import { LessThan } from './condition/less-than'
import { Subtract } from './subtract'

/** Return the `A % B` */
export type Modulo<A extends number, B extends number> = EveryNatural<
  A,
  B
> extends true
  ? LessThan<A, B> extends true
    ? A
    : Modulo<Subtract<A, B>, B>
  : never
