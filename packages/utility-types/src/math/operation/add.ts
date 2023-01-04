import { AnyTuple } from '../../any'
import { Length } from '../../tuple'
import { AreNatural } from '../utils'

export type Add<A extends number, B extends number> = AreNatural<
  A,
  B
> extends true
  ? Length<[...AnyTuple<A>, ...AnyTuple<B>]>
  : never

export {}
