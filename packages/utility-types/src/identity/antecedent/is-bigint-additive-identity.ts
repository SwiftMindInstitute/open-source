import { IsExtension } from '../../any'
import { NumberAdditiveIdentity } from '../number-additive-identity'

/**
 * If `A ≡ 0n` then `true` else `false`
 * @alpha
 * @group Antecedant
 * @group Identity
 * @example
 * ```
 * type Ex1 = IsBigintAdditiveIdentity<0n> // true
 * type Ex2 = IsBigintAdditiveIdentity<2n> // false
 * ```
 */
export type IsBigintAdditiveIdentity<A> = IsExtension<A, NumberAdditiveIdentity>
