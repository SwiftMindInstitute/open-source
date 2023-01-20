import { IsExtension } from '../../any/antecedent/is-extension'
import { AnyArray } from '../../any/any-array'
import { ElementOf } from '../element-of'

/**
 * If `B extends ElementOf<A>` then `true` else `false`
 * @beta
 * @group Antecedant
 * @group Tuple
 * @example
 * ```
 * type Ex1 = IsElementOf<['a', 'b', 'c'], 'a'> // true
 * type Ex2 = IsElementOf<['a', 'b', 'c'], 'z'> // false
 * ```
 */
export type IsElementOf<A extends AnyArray, B> = IsExtension<B, ElementOf<A>>
