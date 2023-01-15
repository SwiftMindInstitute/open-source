import { Options } from '../experiments/options'
import { LengthProp } from '../prop/length-prop'
import { AnyArray } from './any-array'

interface Opts<A extends AnyArray = AnyArray> extends Options<'AnyTuple'> {
  value: A
}

/**
 * Create a tuple of length `A` with entries of type `B` (defaults to `any`)
 * @group Any
 * @example
 * ```
 * type Ex1 = AnyTuple<2>         // [any, any]
 * type Ex2 = AnyTuple<3, number> // [number, number, number]
 * ```
 */
export type AnyTuple<
  A extends number,
  B = any,
  Z extends Opts = Opts<[]>
> = LengthProp<Z['value']> extends A
  ? Z['value']
  : AnyTuple<A, B, Opts<[...Z['value'], B]>>

export {}
