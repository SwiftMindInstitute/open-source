import { One, Zero } from '../identity'

/**
 * If `A extends true` then `1` else `0`
 * @experimental
 * @group Logic
 * @example
 * ```
 * type Ex1 = Bit<true>  // 1
 * type Ex2 = Bit<false> // 0
 * ```
 */
export type Bit<A extends boolean> = A extends true ? One : Zero

export {}
