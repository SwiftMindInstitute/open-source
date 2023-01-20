import { IsExtension } from '../../any'
import { NumberMultiplicativeIdentity } from '../number-multiplicative-identity'

/**
 * If `A ≡ 1` then `true` else `false`
 * @beta
 * @group Condition
 * @group Identity
 * @example
 * ```
 * type Ex1 = IsNumberMultiplicativeIdentity<1> // true
 * type Ex2 = IsNumberMultiplicativeIdentity<2> // false
 * ```
 */
export type IsNumberMultiplicativeIdentity<A> = IsExtension<
  A,
  NumberMultiplicativeIdentity
>

/**
 * Alias for `IsNumberMultiplicativeIdentity`
 * @beta
 * @group Condition
 * @group Identity
 */
export type IsOne<A> = IsNumberMultiplicativeIdentity<A>
