import { AnyArray } from '../any/any-array'

/**
 * Append `B` onto tuple `A`
 * @beta
 * @group Tuple
 * @example
 * ```
 * type Ex = Append<['a', 'b'], 'c'> // ['a', 'b', 'c']
 * ```
 */
export type Append<A extends AnyArray, B> = [...A, B]
