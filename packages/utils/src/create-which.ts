/** The type of any possible key */
type Key = keyof any

/**
 * If `A[B]` then `A[B]` else if `A[C]` then `A[C]` else `undefined`
 */
type WithFallback<A, B, C = undefined> = B extends keyof A
  ? A[B]
  : C extends keyof A
  ? A[C]
  : undefined

/**
 * Which function interface overloads
 */
interface Which {
  <A>(a: A): <B extends Key>(b?: B) => WithFallback<A, B>
  <A, B extends keyof A>(a: A, b?: B): <C extends Key>(
    c?: C
  ) => WithFallback<A, C, B>
}

/**
 * Create a which function
 *
 * @example
 * ```
 * // Without default
 * const which1 = createWhich({
 *   a: 1,
 *   b: 2,
 * })
 * which1('a') // 'a'
 * which1('zzz') // undefined
 * // With default
 * const which2 = createWhich({
 *   a: 1,
 *   b: 2,
 * }, 'b')
 * const ex3 = which2('a') // 1
 * const ex4 = which2('zzz') // 2
 * ```
 *
 * @param ref
 * @param defaultKey
 * @returns `ref[key]`
 */
const createWhich: Which = (ref: any, defaultKey?: Key) => (key?: Key) => {
  if (key !== undefined) {
    return ref[key]
  } else if (defaultKey !== undefined) {
    return ref[defaultKey]
  } else {
    return
  }
}

export default createWhich
