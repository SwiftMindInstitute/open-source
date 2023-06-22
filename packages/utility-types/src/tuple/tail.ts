import { AnyArray } from '../any/any-array'

/**
 * Return the tail of tuple `A`
 * @beta
 * @group Tuple
 * @example
 * @
 * ```
 * type Ex = Tail<['a', 'b', 'c']> // ['b', 'c']
 * ```
 */
export type Tail<A extends AnyArray> = A extends [any, ...infer B] ? B : never
