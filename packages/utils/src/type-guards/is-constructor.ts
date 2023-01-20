import { AnyConstructor, AnyFunction } from '@bluesky.llc/utility-types'
import { createTypeGuard } from './utils'

/**
 * A generalized type guard for AnyConstructor
 * ```
 * (a: unknown) => a is AnyConstructor<any[], any>
 * ```
 */
const isConstructor = createTypeGuard<AnyConstructor>((value: unknown) => {
  try {
    Reflect.construct(String, [], value as AnyFunction | undefined)
  } catch (e) {
    return false
  }
  return true
})

export default isConstructor
