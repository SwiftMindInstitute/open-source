/**
 * The multiplicative identity element for numbers
 *
 * Identity element under the following operations
 * ```
 * IsEqual<Multiply<2, NumberMultiplicativeIdentity>, 2> // true
 * IsEqual<Divide<4, NumberMultiplicativeIdentity>, 4>   // true
 * ```
 * @group Identity
 * @example
 * ```
 * type Ex = NumberMultiplicativeIdentity // 1
 * ```
 */
export type NumberMultiplicativeIdentity = 1

/**
 * Alias of `NumberMultiplicativeIdentity`
 */
export type One = NumberMultiplicativeIdentity

export {}
