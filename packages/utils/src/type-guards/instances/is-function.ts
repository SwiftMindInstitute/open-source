import { AnyFunction } from '@swiftmind/utility-types'
import createTypeofTypeGuard from '../utils/create-typeof-type-guard'

/**
 * A type guard for function
 * ```
 * (a: unknown) => a is AnyFunction<AnyArray<any., any>
 * ```
 */
const isFunction = createTypeofTypeGuard<AnyFunction>('function')

export default isFunction
