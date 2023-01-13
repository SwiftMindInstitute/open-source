import { IsEqual } from '../../any/condition/is-equal'
import { NumberAdditiveIdentity } from '../number-additive-identity'

/**
 * If `A ≡ 0` then `true` else `false`
 * @group Condition
 * @group Identity
 * @example
 * ```
 * type Ex1 = IsNumberAdditiveIdentity<0> // true
 * type Ex2 = IsNumberAdditiveIdentity<2> // false
 * ```
 */
export type IsNumberAdditiveIdentity<A> = IsEqual<A, NumberAdditiveIdentity>

/**
 * Alias for `IsNumberAdditiveIdentity`
 * @group Condition
 * @group Identity
 */
export type IsZero<A> = IsNumberAdditiveIdentity<A>

export {}
