import { AnyTuple } from '@any/any-tuple'
import { Length } from '@tuple/length'
import { EveryNatural } from './condition/every-natural'

/** Return the difference of `A - B` */
export type Subtract<A extends number, B extends number> = EveryNatural<
  A,
  B
> extends true
  ? AnyTuple<A> extends [...infer C, ...AnyTuple<B>]
    ? Length<C>
    : never
  : never
