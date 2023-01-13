import { IsEqual } from '@any/condition'
import { NumberMultiplicativeIdentity } from '@identity/number-multiplicative-identity'

/**
 * If `A ≡ 0` then true else false
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
 */
export type IsOne<A> = IsNumberMultiplicativeIdentity<A>

export {}
