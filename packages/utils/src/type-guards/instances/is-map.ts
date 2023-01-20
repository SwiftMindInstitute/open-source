import createInstanceTypeGuard from '../utils/create-instance-type-guard'

/**
 * A type guard for Map
 * ```
 * (a: unknown) => a is Map<any, any>
 * ```
 */
const isMap = createInstanceTypeGuard<Map<any, any>>(Map)

export default isMap
