import { AnyArray } from '@any/any-array'

/**
 * Return the head of tuple `A`
 * @example
 * ```
 * type Ex1 = Head<['a', 'b', 'c']> // 'a'
 * type Ex2 = First<[1, 2, 3]> // 1
 * ```
 * */
export type Head<A extends AnyArray> = A[0]

export type First<A extends AnyArray> = Head<A>

export {}
