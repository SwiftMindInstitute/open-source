import { Falsy } from 'utility-types'
import { createTypeGuard } from './utils'

const isFalsy = createTypeGuard<Falsy>(value => !value)

export default isFalsy
