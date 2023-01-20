import { IsExtension } from '../../any'
import { NumberMultiplicativeIdentity } from '../number-multiplicative-identity'

/**
 * If `A ≡ 1n` then `true` else `false`
 * @alpha
 * @group Condition
 * @group Identity
 * @example
 * ```
 * type Ex1 = IsBigintMultiplicativeIdentity<1n> // true
 * type Ex2 = IsBigintMultiplicativeIdentity<2n> // false
 * ```
 */
export type IsBigintMultiplicativeIdentity<A> = IsExtension<
  A,
  NumberMultiplicativeIdentity
>
