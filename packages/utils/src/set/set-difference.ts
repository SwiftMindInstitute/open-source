import { AnySet, ValueOf } from '@swiftmind/utility-types'
import setComplement from './set-complement'
import setIntersection from './set-intersection'
import setUnion from './set-union'

/**
 * Calculate the
 * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
 * `A △ B` of `A` and `B`
 * @param a A set
 * @param b A set
 * @returns A set
 * @experimental
 * @example
 * ```
 * const ex = setDifference(
 *   new Set(1, 2),
 *   new Set(2, 3)
 * ) // new Set(1, 3)
 * ```
 */
const setDifference = <A extends AnySet, B extends AnySet>(a: A, b: B) => {
  return setComplement(setUnion(a, b), setIntersection(a, b)) as Set<
    ValueOf<A> | ValueOf<B>
  >
}

export default setDifference
