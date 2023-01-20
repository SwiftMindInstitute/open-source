import { AnyArray } from '../any/any-array'

/**
 * Evaluate the union of all entries of `A`
 * @alpha
 * @group Tuple
 * @example
 * ```
 * type Ex = Unions<[true, null, false]> // boolean | null
 * ```
 */
export type Unions<A extends AnyArray, B = never> = A extends [
  infer C,
  ...infer D
]
  ? Unions<D, C | B>
  : B
