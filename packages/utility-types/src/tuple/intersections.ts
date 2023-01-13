import { AnyArray } from '@any/any-array'
import { EmptyObject } from '@identity/object-identity'

/**
 * Evaluate the intersection of all entries of `A`
 * @experimental
 * @group Tuple
 * @example
 * ```
 * type Ex = Intersections<[{ a: 'a' }, { b: 'b' }]> // { a: 'a', b: 'b' }
 * ```
 */
export type Intersections<A extends AnyArray, B = EmptyObject> = A extends [
  infer C,
  ...infer D
]
  ? Intersections<D, B & C>
  : B
