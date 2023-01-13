import { AnyArray } from '@any/any-array'

/**
 * Prepend `B` onto tuple `A`
 * @example
 * ```
 * type Ex = Prepend<[2, 3], 1> // [1, 2, 3]
 * ```
 */
export type Prepend<A extends AnyArray, B = any> = [B, ...A]

export {}
