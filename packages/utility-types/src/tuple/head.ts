import { AnyArray } from '@any/any-array'
import { Zero } from '@identity/number-additive-identity'

/**
 * Return the head of tuple `A`
 * @group Tuple
 * @example
 * ```
 * type Ex1 = Head<['a', 'b', 'c']> // 'a'
 * type Ex2 = First<[1, 2, 3]>      // 1
 * ```
 * */
export type Head<A extends AnyArray> = A[Zero]

/**
 * Alias of `Head`
 * @group Tuple
 */
export type First<A extends AnyArray> = Head<A>

export {}
