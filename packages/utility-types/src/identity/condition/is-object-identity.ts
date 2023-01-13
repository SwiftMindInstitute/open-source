import { IsEqual } from '@any/condition'
import { ObjectIdenity } from '@identity/object-identity'

/**
 * If `A ≡ {}` then `true` else `false`
 * @group Condition
 * @group Identity
 * @example
 * ```
 * type Ex1 = IsObjectIdentity<{}>          // true
 * type Ex2 = IsObjectIdentity<{ a: true }> // false
 * ```
 */
export type IsObjectIdentity<A> = IsEqual<A, ObjectIdenity>

/**
 * Alias for `IsObjectIdentity`
 * @group Condition
 * @group Identity
 */
export type IsEmptyObject<A> = IsObjectIdentity<A>

export {}
