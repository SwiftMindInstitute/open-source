import createInstanceTypeGuard from '../utils/create-instance-type-guard'

/**
 * A type guard for WeakMap
 * ```
 * (a: unknown) => a is WeakMap<any>
 * ```
 */
const isWeakMap = createInstanceTypeGuard<WeakMap<any, any>>(WeakMap)

export default isWeakMap
