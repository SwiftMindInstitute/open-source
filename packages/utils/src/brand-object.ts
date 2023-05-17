import { AnyKey, AnyObject } from '@swiftmind/utility-types'
import setProp from './set-prop'
import validateHasProp from './validation/validate-has-prop'

interface BrandObject {
  <A extends AnyObject, B extends AnyKey, C = B>(a: A, b: B, c?: C | B): A & {
    [D in B]: C
  }
}

/**
 * Brand as in 🐂.
 *
 * If `ref[key]` return `ref` else `ref & { [key]: value }`
 *
 * @param ref An object
 * @param key A key
 * @param value A value
 * @returns An object
 * @example
 * ```
 * const ex1 = brandObject({}, 'a')              // { a: 'a' }
 * const ex2 = brandObject({}, 'hello', 'world') // { hello: 'world }
 * ```
 */
const brandObject: BrandObject = (ref, key, value = key) => {
  if (!validateHasProp(ref, key)) {
    return setProp(ref, key, value ?? key)
  }

  return ref
}

export default brandObject
