import { AnyPrimitive } from '@swiftmind/utility-types'
import isNullish from './is-nullish'
import { createTypeGuard } from './utils'

/**
 * A generalized type-guard for AnyPrimitive
 * ```
 * (a: unknown) => a is AnyPrimitive
 * ```
 */
const isPrimitive = createTypeGuard<AnyPrimitive>(value => {
  if (isNullish(value)) {
    return true
  }
  switch (typeof value) {
    case 'string':
    case 'number':
    case 'bigint':
    case 'boolean':
    case 'symbol': {
      return true
    }
    default: {
      return false
    }
  }
})

export default isPrimitive
