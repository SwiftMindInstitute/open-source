import { AnyNullish } from '@bluesky.llc/utility-types'
import { createTypeGuard } from './utils'

/**
 * A generalized type-guard for Nullish
 * ```
 * (a: unknown) => a is AnyNullish
 * ```
 */
const isNullish = createTypeGuard<AnyNullish>(value => value == null)

export default isNullish
