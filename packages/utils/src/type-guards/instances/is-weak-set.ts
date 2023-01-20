import createInstanceTypeGuard from '../utils/create-instance-type-guard'

/**
 * A type guard for WeakSet
 * ```
 * (a: unknown) => a is WeakSet<any>
 * ```
 */
const isWeakSet = createInstanceTypeGuard<WeakSet<any>>(WeakSet)

export default isWeakSet
