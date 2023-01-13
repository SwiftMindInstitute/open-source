import { AnyArray } from '@any/any-array'

/**
 * Return the concatenation of `A` and `B`
 * @group Tuple
 * @example
 * ```
 * type Ex = Concat<['a', 'b', 'c'], [1, 2, 3]> // ["a", "b", "c", 1, 2, 3]
 * ```
 */
export type Concat<A extends AnyArray, B extends AnyArray> = [...A, ...B]

export {}
