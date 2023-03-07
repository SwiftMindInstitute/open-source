import { Not } from '@bluesky.llc/utility-types'

/**
 * Return the negation of `a`
 * @param a
 * @param b
 * @returns boolean
 * @beta
 * @example
 * ```
 * const ex1 = not(true)  // false
 * const ex2 = not(false) // true
 * ```
 */
const not = <A extends boolean>(a: A): Not<A> => !a as Not<A>

export default not
