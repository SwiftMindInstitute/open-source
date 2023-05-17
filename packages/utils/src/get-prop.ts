import { AnyKey, AnyObject } from '@swiftmind/utility-types'
import { isNullish } from './type-guards'

/**
 * Return a property from `ref` corresponding to `key`
 * @param ref An object
 * @param key A key
 * @returns The property corresponding to `ref[key]`
 */
const getProp = <A, B extends AnyKey>(ref: A, key: B) =>
  isNullish(ref) ? false : (ref as AnyObject)[key]

export default getProp
