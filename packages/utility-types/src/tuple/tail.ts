import { AnyArray } from '../any/any-array'
import { Prepend } from './prepend'

/**
 * Return the tail of tuple `A`
 * @group Tuple
 * @example
 * ```
 * type Ex = Tail<['a', 'b', 'c']> // ['b', 'c']
 * ```
 */
export type Tail<A extends AnyArray> = A extends Prepend<infer B, any>
  ? B
  : never
