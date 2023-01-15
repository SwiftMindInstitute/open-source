interface Add {
  <A extends number, B extends number>(a: A, b: B): number
  <A extends string, B extends string>(a: A, b: B): string
  /** The remaining cases describe JavaScrpt's behavior */
  <A extends string, B extends number>(a: A, b: B): string
  <A extends number, B extends string>(a: A, b: B): string
}

/**
 * Add `a` to `b`.
 * @param a number|string
 * @param b number|string
 * @returns number|string
 * @example
 * ```
 * const ex1 = add(1, 2) // 3
 * ```
 * ```
 * @example
 * ```
 * const ex2 = add('a', 'b') // 'ab'
 * ```
 */
const add: Add = (a: any, b: any) => a + b

export default add
