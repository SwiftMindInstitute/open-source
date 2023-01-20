import { IsEqual } from '../../any/condition/is-equal'
import { StringConcatIdentity } from '../string-concat-identity'

/**
 * If `A ≡ ''` then `true` else `false`
 * @beta
 * @group Condition
 * @group Identity
 * @example
 * ```
 * type Ex1 = IsStringIdentity<''>    // true
 * type Ex2 = IsStringIdentity<'abc'> // false
 * ```
 */
export type IsStringIdentity<A> = IsEqual<A, StringConcatIdentity>

/**
 * Alias for `IsStringIdentity`
 * @beta
 * @group Condition
 * @group Identity
 */
export type IsEmptyString<A> = IsStringIdentity<A>
