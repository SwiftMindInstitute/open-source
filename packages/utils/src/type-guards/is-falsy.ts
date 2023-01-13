import { AnyFalsy } from '@bluesky.llc/utility-types'
import { createTypeGuard } from './utils'

const isFalsy = createTypeGuard<AnyFalsy>(value => !value)

export default isFalsy
