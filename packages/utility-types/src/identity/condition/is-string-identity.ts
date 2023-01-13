import { IsEqual } from '@any/condition'
import { StringIdentity } from '..'

/**
 * If `A ≡ ''` then `true` else `false`
 * @group Condition
 * @group Identity
 * @example
 * ```
 * type Ex1 = IsStringIdentity<''> // true
 * type Ex2 = IsStringIdentity<'abc'> // false
 * ```
 */
export type IsStringIdentity<A> = IsEqual<A, StringIdentity>

/**
 * Alias for `IsStringIdentity`
 * @group Condition
 * @group Identity
 */
export type IsEmptyString<A> = IsStringIdentity<A>

export {}
