import { AnyNullish } from '@bluesky.llc/utility-types'
import { createTypeGuard } from './utils'

const isNullish = createTypeGuard<AnyNullish>(value => value == null)

export default isNullish
