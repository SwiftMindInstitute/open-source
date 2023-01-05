import { IsEqual } from '@any/condition/is-equal'

/**
 * If `A ≡ 0` then `true` else `false`
 * @example
 * ```
 * type Ex1 = IsZero(0) // true
 * type Ex2 = IsZero(1) // false
 * ```
 */
export type IsZero<A extends number> = IsEqual<A, 0>

export {}
