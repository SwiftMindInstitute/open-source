/**
 * The additive identity element for numbers
 *
 * ```
 * IsEqual<Add<1, NumberAdditiveIdentity>, 1> // true
 * ```
 *
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
