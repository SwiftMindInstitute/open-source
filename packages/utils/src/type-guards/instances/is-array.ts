import { AnyArray } from 'utility-types'
import { createTypeGuard } from '../utils'

const isArray = createTypeGuard<AnyArray>(Array.isArray)

export default isArray
