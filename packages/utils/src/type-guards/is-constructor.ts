import { AnyConstructor, AnyFunction } from 'utility-types'
import { createTypeGuard } from './utils'

const isConstructor = createTypeGuard<AnyConstructor>(value => {
  try {
    Reflect.construct(String, [], value as AnyFunction | undefined)
  } catch (e) {
    return false
  }
  return true
})

export default isConstructor
