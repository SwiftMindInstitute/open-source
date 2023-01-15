import { Add as AddUtility } from '@bluesky.llc/utility-types'

interface Add {
  <A extends boolean, B extends number, C extends number>(
    b: B,
    c: C
  ): A extends true ? AddUtility<B, C> : number
  <A extends boolean, B extends string, C extends string>(b: B, c: C): string
  /** The remaining cases describe JavaScrpt's behavior */
  <A extends boolean, B extends string, C extends number>(b: B, c: C): string
  <A extends boolean, B extends number, C extends string>(b: B, c: C): string
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

const x = add<1, 2>(2, 5)

export default add
