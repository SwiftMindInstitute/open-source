/**
 * The multiplicative identity element for number
 *
 * Identity element under the following operations
 * ```
 * IsEqual<Multiply<2, NumberMultiplicativeIdentity>, 2> // true
 * IsEqual<Divide<4, NumberMultiplicativeIdentity>, 4>   // true
 * ```
 * @beta
 * @group Identity
 * @example
 * ```
 * type Ex = NumberMultiplicativeIdentity // 1
 * ```
 */
export type NumberMultiplicativeIdentity = 1

/**
 * Alias of `NumberMultiplicativeIdentity`
 * @beta
 * @group Identity
 */
export type One = NumberMultiplicativeIdentity
