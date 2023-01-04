import { AnyTuple } from '../../any'
import { Length } from '../../tuple'
import { AreNatural } from '../utils'

/** Return the difference of `A - B` */
export type Subtract<A extends number, B extends number> = AreNatural<
  A,
  B
> extends true
  ? AnyTuple<A> extends [...infer C, ...AnyTuple<B>]
    ? Length<C>
    : never
  : never
