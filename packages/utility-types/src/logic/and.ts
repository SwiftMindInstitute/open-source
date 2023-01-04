/**
 * If `A ∧ B` then `true` else `false` where `A extends boolean` and `B extends
 * boolean`
 * @example
 * ```
 * type Ex1 = And<true, true> // true
 * type Ex2 = And<true, false> // false
 * type Ex3 = And<false, true> // false
 * type Ex4 = And<false, false> // false
 * ```
 */
export type And<A extends boolean, B extends boolean> = A extends true
  ? B extends true
    ? true
    : false
  : false

export {}
