import { AnyKey, IsKeyOf } from '@swiftmind/utility-types'

/**
 * If `ref[key] === undefined` then `false` else `true`
 * @param ref An object
 * @param key A key
 * @returns boolean
 */
const validateHasProp = <A extends object, B extends AnyKey>(
  ref: A,
  key: B
): IsKeyOf<A, B> => Object.hasOwn(ref, key) as IsKeyOf<A, B>

export default validateHasProp
