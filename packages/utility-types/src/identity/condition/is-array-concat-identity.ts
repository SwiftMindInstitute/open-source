import { IsEqual } from '../../any/condition/is-equal'
import { ArrayConcatIdentity } from '../array-concat-identity'

/**
 * If `A ≡ []` then `true` else `false`
 * @beta
 * @group Condition
 * @group Identity
 * @example
 * ```
 * type Ex1 = IsArrayIdentity<[]>     // true
 * type Ex2 = IsArrayIdentity<[true]> // false
 * ```
 */
export type IsArrayIdentity<A> = IsEqual<A, ArrayConcatIdentity>

/**
 * Alias for `IsArrayIdentity`
 * @beta
 * @group Condition
 * @group Identity
 */
export type IsEmptyArray<A> = IsArrayIdentity<A>
