import { Primitive } from 'utility-types'
import { createTypeGuard } from './utils'

const isPrimitive = createTypeGuard<Primitive>(value => {
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
