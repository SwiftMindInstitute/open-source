import { Falsy } from '@bluesky.llc/utility-types'
import { createTypeGuard } from './utils'

const isFalsy = createTypeGuard<Falsy>(value => !value)

export default isFalsy
