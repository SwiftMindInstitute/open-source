import { IsEqual } from '@any/condition'
import { NumberAdditiveIdentity } from '..'

/**
 * If `A ≡ 0` then true else false
 * @example
 * ```
 * type Ex1 = IsNumberAdditiveIdentity<0> // true
 * type Ex2 = IsNumberAdditiveIdentity<2> // false
 * ```
 */
export type IsNumberAdditiveIdentity<A> = IsEqual<A, NumberAdditiveIdentity>

/**
 * Alias for `IsNumberAdditiveIdentity`
 */
export type IsZero<A> = IsNumberAdditiveIdentity<A>

export {}
