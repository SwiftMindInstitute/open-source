import { AnyTuple } from '@any/any-tuple'
import { Length } from '@tuple/length'
import { EveryNatural } from './condition/every-natural'

export type Add<A extends number, B extends number> = EveryNatural<
  A,
  B
> extends true
  ? Length<[...AnyTuple<A>, ...AnyTuple<B>]>
  : never

export {}
