import { AnyArray } from '../../../any'

/**
 * Return the tail of tuple `A`
 * @example
 * ```
 * type Ex = Tail<['a', 'b', 'c']> // ['b', 'c']
 * ```
 */
export type Tail<A extends AnyArray> = A extends [any, ...infer B]
  ? B
  : A extends readonly [any, ...infer C]
  ? C
  : never
