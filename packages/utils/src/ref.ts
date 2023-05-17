import { AnyNullish } from '@swiftmind/utility-types'
import { isNullish } from './type-guards'

interface Ref {
  (): {}
  <A>(a: A): A extends AnyNullish ? {} : A
}

/**
 * Return `a` if it can be used as a reference otherwise return `{}`
 * @param a unknown
 * @returns something which can be used as a reference
 */
const ref: Ref = (a?: unknown) => (isNullish(a) ? Object.create(null) : a)

export default ref
