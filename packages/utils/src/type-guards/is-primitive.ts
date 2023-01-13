import { AnyPrimitive } from '@bluesky.llc/utility-types'
import { createTypeGuard } from './utils'

const isPrimitive = createTypeGuard<AnyPrimitive>(value => {
  if (value === null || value === undefined) {
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
    default:
      return false
  }
})

export default isPrimitive
