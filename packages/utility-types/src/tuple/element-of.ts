import { AnyArray } from '../any'
import { IndexOf } from './index-of'

/**
 * A union of all elements of `A`
 * @beta
 * @group Tuple
 * @example
 * ```
 * type Ex = ElementOf<'a', 'b', 'c'> // 'a' | 'b' | 'c'
 * ```
 */
export type ElementOf<A extends AnyArray> = A[IndexOf<A>]
