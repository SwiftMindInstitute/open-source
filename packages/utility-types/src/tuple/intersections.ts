import { AnyArray } from '../any/any-array'

/**
 * Evaluate the intersection of all entries of `A`
 * @alpha
 * @group Tuple
 * @example
 * ```
 * type Ex = Intersections<[{ a: 'a' }, { b: 'b' }]> // { a: 'a', b: 'b' }
 * ```
 */
export type Intersections<A extends AnyArray, B = {}> = A extends [
  infer C,
  ...infer D
]
  ? Intersections<D, B & C>
  : B
