import { IsEqual } from '@any/condition'
import { ArrayIdentity } from '@identity/array-identity'

/**
 * If `A ≡ []` then `true` else `false`
 * @group Condition
 * @group Identity
 * @example
 * ```
 * type Ex1 = IsArrayIdentity<[]>     // true
 * type Ex2 = IsArrayIdentity<[true]> // false
 * ```
 */
export type IsArrayIdentity<A> = IsEqual<A, ArrayIdentity>

/**
 * Alias for `IsArrayIdentity`
 * @group Condition
 * @group Identity
 */
export type IsEmptyArray<A> = IsArrayIdentity<A>

export {}
