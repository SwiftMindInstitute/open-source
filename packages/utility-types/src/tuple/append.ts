import { AnyArray } from '@any/any-array'

/**
 * Append `B` onto tuple `A`
 * @group Tuple
 * @example
 * ```
 * type Ex = Append<['a', 'b'], 'c'> // ['a', 'b', 'c']
 * ```
 */
export type Append<A extends AnyArray, B = any> = [...A, B]

export {}
