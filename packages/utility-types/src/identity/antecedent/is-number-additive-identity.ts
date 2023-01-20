import { IsExtension } from '../../any'
import { NumberAdditiveIdentity } from '../number-additive-identity'

/**
 * If `A ≡ 0` then `true` else `false`
 * @beta
 * @group Antecedent
 * @group Identity
 * @example
 * ```
 * type Ex1 = IsNumberAdditiveIdentity<0> // true
 * type Ex2 = IsNumberAdditiveIdentity<2> // false
 * ```
 */
export type IsNumberAdditiveIdentity<A> = IsExtension<A, NumberAdditiveIdentity>

/**
 * Alias for `IsNumberAdditiveIdentity`
 * @beta
 * @group Antecedent
 * @group Identity
 */
export type IsZero<A> = IsNumberAdditiveIdentity<A>
