import { IsExtension } from '../../any/antecedent/is-extension'
import { AnyArray } from '../../any/any-array'
import { IndexOf } from '../index-of'

/**
 * If `B extends IndexOf<A>` then `true` else `false`
 * @beta
 * @group Antecedant
 * @group Tuple
 * @example
 * ```
 * type Ex1 = IsIndexOf<[1, 2, 3], 2> // true
 * type Ex2 = IsIndexOf<[], 1>        // false
 * ```
 */
export type IsIndexOf<A extends AnyArray, B extends number> = IsExtension<
  `${B}`,
  IndexOf<A>
>
