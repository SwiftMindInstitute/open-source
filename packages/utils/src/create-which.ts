import { AnyKey } from '@swiftmind/utility-types'

/**
 * If `A[B]` then `A[B]` else if `A[C]` then `A[C]` else `undefined`
 */
export type WithFallback<A, B, C = undefined> = B extends keyof A
  ? A[B]
  : C extends keyof A
  ? A[C]
  : undefined

/**
 * Which function interface overloads
 */
export interface Which {
  <A>(a: A): <B extends AnyKey>(b?: B) => WithFallback<A, B>
  <A, B extends keyof A>(a: A, b?: B): <C extends AnyKey>(
    c?: C
  ) => WithFallback<A, C, B>
}

/**
 * Create a which function
 * @param ref
 * @param defaultKey
 * @returns `ref[key]`
 * @example
 * ```
 * // Without default
 * const which1 = createWhich({
 *   a: 1,
 *   b: 2,
 * })
 * which1('a') // 'a'
 * which1('zzz') // undefined
 * ```
 * @example
 * ```
 * // With default
 * const which2 = createWhich({
 *   a: 1,
 *   b: 2,
 * }, 'b')
 * const ex3 = which2('a') // 1
 * const ex4 = which2('zzz') // 2
 * ```
 */
const createWhich: Which =
  (ref: any, defaultKey?: AnyKey) => (key?: AnyKey) => {
    if (key !== undefined) {
      return ref[key]
    } else if (defaultKey !== undefined) {
      return ref[defaultKey]
    } else {
      return
    }
  }

export default createWhich
