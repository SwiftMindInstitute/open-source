/**
 * Return the conjuction of `a ∧ b`
 * @param a
 * @param b
 * @returns boolean
 * @beta
 * @example
 * ```
 * const ex1 = and(false, false) // false
 * const ex2 = and(false, true)  // false
 * const ex3 = and(true, false)  // false
 * const ex4 = and(true, true)   // true
 * ```
 */
const and = <A extends boolean, B extends boolean>(a: A, b: B) => a && b

export default and
