import { AnyArray } from '@swiftmind/utility-types'
import { createTypeGuard } from '../utils'

/**
 * A type guard for array
 * ```
 * (a: unknown) => a is AnyArray<any>
 * ```
 */
const isArray = createTypeGuard<AnyArray>(Array.isArray)

export default isArray
