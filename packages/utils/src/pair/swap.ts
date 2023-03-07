/**
 * Swap `a` and `b` ind the array `[a, b]`
 * @alpha
 * @example
 * ```
 * const ex = swap([0, 1]) // [1, 0]
 * ```
 */
const swap = <A, B>([a, b]: [A, B] | readonly [A, B]): [B, A] => [b, a]

export default swap
