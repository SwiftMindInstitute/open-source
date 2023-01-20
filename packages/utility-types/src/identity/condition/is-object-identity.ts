import { IsEqual } from '../../any/condition/is-equal'
import { ObjectIntersectionIdenity } from '../object-intersection-identity'

/**
 * If `A ≡ {}` then `true` else `false`
 * @beta
 * @group Condition
 * @group Identity
 * @example
 * ```
 * type Ex1 = IsObjectIdentity<{}>          // true
 * type Ex2 = IsObjectIdentity<{ a: true }> // false
 * ```
 */
export type IsObjectIdentity<A> = IsEqual<A, ObjectIntersectionIdenity>

/**
 * Alias for `IsObjectIdentity`
 * @beta
 * @group Condition
 * @group Identity
 */
export type IsEmptyObject<A> = IsObjectIdentity<A>
