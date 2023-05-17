import { AnyKey } from '@swiftmind/utility-types/dist/any/any-key'
import createTypeGuard from './utils/create-type-guard'

const isKey = createTypeGuard<AnyKey>(value => {
  switch (typeof value) {
    case 'string':
    case 'number':
    case 'symbol': {
      return true
    }
    default: {
      return false
    }
  }
})

export default isKey
