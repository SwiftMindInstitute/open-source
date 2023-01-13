import { IsEqual } from '../../any/condition/is-equal'
import { NumberMultiplicativeIdentity } from '../number-multiplicative-identity'

/**
 * If `A ≡ 1` then `true` else `false`
 * @group Condition
 * @group Identity
 * @example
 * ```
 * type Ex1 = IsNumberMultiplicativeIdentity<1> // true
 * type Ex2 = IsNumberMultiplicativeIdentity<2> // false
 * ```
 */
export type IsNumberMultiplicativeIdentity<A> = IsEqual<
  A,
  NumberMultiplicativeIdentity
>

/**
 * Alias for `IsNumberMultiplicativeIdentity`
 * @group Condition
 * @group Identity
 */
export type IsOne<A> = IsNumberMultiplicativeIdentity<A>

export {}
