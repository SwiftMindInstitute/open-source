import { AnySet, Constructor, ValueOf } from '@bluesky.llc/utility-types'

/**
 * Calculate the
 * [complement](https://en.wikipedia.org/wiki/Complement_(set_theory)#Relative_complement)
 * `b \ a` of `a` and `b`
 * @param a A set
 * @param b A set
 * @return A set
 * @experimental
 * @example
 * ```
 * const ex = setComplement(
 *   new Set([1, 2]),
 *   new Set([2, 3])
 * ) // new Set(1)
 * ```
 */
const setComplement = <A extends AnySet, B extends AnySet>(a: A, b: B) => {
  const newSet: AnySet<ValueOf<A> | ValueOf<B>> =
    new (a.constructor as Constructor)()

  for (const elem of a) {
    if (!b.has(elem)) {
      newSet.add(elem)
    }
  }

  return newSet
}

export default setComplement
