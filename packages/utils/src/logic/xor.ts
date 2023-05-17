import { Xor } from '@swiftmind/utility-types'

/**
 * Return the disjunction of `a ⊻ b`
 * @param a
 * @param b
 * @returns boolean
 * @beta
 * @example
 * ```
 * const ex1 = xor(true, true)   // false
 * const ex2 = xor(true, false)  // true
 * const ex3 = xor(false, true)  // true
 * const ex4 = xor(false, false) // false
 * ```
 */
const xor = <A extends boolean, B extends boolean>(a: A, b: B): Xor<A, B> =>
  (a ? !b : b) as Xor<A, B>

export default xor
