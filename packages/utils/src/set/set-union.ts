import { AnySet, Constructor, ValueOf } from '@swiftmind/utility-types'

/**
 * The
 * [complement](https://en.wikipedia.org/wiki/Complement_(set_theory)#Relative_complement)
 * `B \ A` of `A` and `B`
 * @param a
 * @param b
 * @returns
 * @experimental
 * @example
 * ```
 * const ex = setUnion(
 *   new Set([1, 2]),
 *   new Set([2, 3])
 * ) // new Set([1, 2, 3])
 * ```
 */
const setUnion = <A extends AnySet, B extends AnySet>(
  a: A,
  b: B
): AnySet<ValueOf<A> | ValueOf<B>> =>
  new (a.constructor as Constructor)([...a, ...b])

export default setUnion
