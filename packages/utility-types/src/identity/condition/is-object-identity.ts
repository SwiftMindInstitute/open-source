import { IsEqual } from '@any/condition'
import { ObjectIdenity } from '@identity/object-identity'

/**
 * If `A ≡ {}` then `true` else `false`
 * @example
 * ```
 * type Ex1 = IsObjectIdentity<{}> // true
 * type Ex2 = IsObjectIdentity<{ a: true }> // false
 * ```
 */
export type IsObjectIdentity<A> = IsEqual<A, ObjectIdenity>

/**
 * Alias for `IsObjectIdentity`
 */
export type IsEmptyObject<A> = IsObjectIdentity<A>

export {}
