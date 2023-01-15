import { AnyArray, Xors } from '@bluesky.llc/utility-types'

/**
 *
 * const ex1 = xor(true, true) // false
 * const ex2 = xor(true, false) // true
 * const ex3 = xor(false, true) // true
 * const ex4 = xor(false, false) // false
 */
const xor = <A extends AnyArray<boolean>>(...values: A): Xors<A> =>
  values.reduce((memo, value) => (memo ? !value : value), false) as Xors<A>

export default xor
