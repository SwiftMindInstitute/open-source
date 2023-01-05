import { AnyArray } from './any-array'

/**
 * Create a tuple of length `A` with entries of type `B` (defaults to `any`)
 * @example
 * ```
 * type Ex1 = AnyTuple<2> // [any, any]
 * type Ex2 = AnyTuple<3, number> // [number, number, number]
 * ```
 */
export type AnyTuple<
  A extends number,
  B extends any = any,
  C extends AnyArray = []
> = C extends {
  length: A
}
  ? C
  : AnyTuple<A, B, [...C, B]>

export {}
