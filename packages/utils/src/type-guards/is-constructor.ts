import { AnyConstructor, AnyFunction } from '@bluesky.llc/utility-types'
import { createTypeGuard } from './utils'

const isConstructor = createTypeGuard<AnyConstructor>((value: unknown) => {
  try {
    Reflect.construct(String, [], value as AnyFunction | undefined)
  } catch (e) {
    return false
  }
  return true
})

export default isConstructor
