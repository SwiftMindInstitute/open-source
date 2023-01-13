import { AnyArray } from '../any/any-array'

/**
 * Return a union of the types of entries in `A`
 * @group Tuple
 * @example
 * ```
 * type Ex = In<[1, 'a']> // number | string
 * ```
 */
export type In<A extends AnyArray> = A extends AnyArray<infer B> ? B : never

export {}
