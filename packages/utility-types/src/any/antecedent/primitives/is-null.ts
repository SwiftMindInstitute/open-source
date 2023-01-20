import { IsExtension } from '../is-extension'

/**
 * If `A extends null` then `true` else `false`
 * @beta
 * @group Antecedant
 * @group Any
 * @example
 * ```
 * type Ex1 = IsNull<null>  // true
 * type Ex2 = IsNull<false> // false
 * ```
 */
export type IsNull<A> = IsExtension<A, null>
