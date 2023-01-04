import { Nullish } from 'utility-types'
import { createTypeGuard } from './utils'

const isNullish = createTypeGuard<Nullish>(value => value == null)

export default isNullish
