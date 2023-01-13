/**
 * The additive identity element for numbers
 *
 * Identity element under the following operations
 * ```
 * IsEqual<Add<1, NumberAdditiveIdentity>, 1>      // true
 * IsEqual<Subtract<2, NumberAdditiveIdentity>, 2> // true
 * ```
 * @group Identity
 * @example
 * ```
 * type Ex = NumberAdditiveIdentity // 0
 * ```
 */
export type NumberAdditiveIdentity = 0

/**
 * Alias of `NumberAdditiveIdentity`
 */
export type Zero = NumberAdditiveIdentity

export {}
