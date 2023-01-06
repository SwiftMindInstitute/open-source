import { AnyArray } from '@any/any-array'

/**
 * If A extends [] then true else false
 * @example
 * ```
 * type Ex1 = IsEmpty<[]> // true
 * type Ex2 = IsEmpty<[42]> // false
 * ```
 */
export type IsEmpty<A extends AnyArray> = A extends [] ? true : false
