import { Or } from '@bluesky.llc/utility-types'

/**
 * Return the disjunction of `a ∨ b`
 * @param a
 * @param b
 * @returns boolean
 * @beta
 * @example
 * ```
 * const ex1 = or(false, false) // false
 * const ex2 = or(false, true)  // true
 * const ex3 = or(true, false)  // true
 * const ex4 = or(true, true)   // true
 * ```
 */
const or = <A extends boolean, B extends boolean>(a: A, b: B): Or<A, B> =>
  (a || b) as Or<A, B>

export default or
