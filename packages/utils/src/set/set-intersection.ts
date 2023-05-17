import { AnySet, Constructor, ValueOf } from '@swiftmind/utility-types'

/**
 * The [Intersection](https://en.wikipedia.org/wiki/Intersection_(set_theory))
 * `A ∩ B` of `A` and `B`
 * @param a A set
 * @param b A set
 * @returns A set
 * @experimental
 * @example
 * ```
 * const ex = setIntersection(
 *   new Set(1, 2),
 *   new Set(2, 3)
 * ) // new Set(2, 3)
 * ```
 */
const setIntersection = <A extends AnySet, B extends AnySet>(a: A, b: B) => {
  const newSet: AnySet<ValueOf<A> | ValueOf<B>> =
    new (a.constructor as Constructor)()

  for (const elem of a) {
    if (b.has(elem)) {
      newSet.add(elem)
    }
  }

  return newSet
}

export default setIntersection
