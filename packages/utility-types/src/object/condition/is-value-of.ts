import { AnyObject, IsExtension } from '../../any'
import { ValueOf } from '../value-of'

/**
 * If `B extends ValueOf<A>` then `true` else `false`
 * @beta
 * @group Condition
 * @group Object
 * @example
 * ```
 * type Ex1 = IsValueOf<{ a: 1 }, 1>  // true
 * type Ex2 = IsValueOf<[1, 2, 3], 2> // true
 * ```
 */
export type IsValueOf<A extends AnyObject, B> = IsExtension<B, ValueOf<A>>
