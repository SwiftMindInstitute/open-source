import { AnyObject } from '@swiftmind/utility-types'
import createTypeofTypeGuard from '../utils/create-typeof-type-guard'

/**
 * A type guard for object
 * ```
 * (a: unknown) => a is AnyObject
 * ```
 */
const isObject = createTypeofTypeGuard<AnyObject>('object')

export default isObject
