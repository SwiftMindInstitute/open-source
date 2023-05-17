import { AnyFalsy } from '@swiftmind/utility-types'
import { createTypeGuard } from './utils'

/**
 * A generalized type-guard for Falsy
 * ```
 * (a: unknown) => a is AnyFalsy
 * ```
 */
const isFalsy = createTypeGuard<AnyFalsy>(value => !value)

export default isFalsy
