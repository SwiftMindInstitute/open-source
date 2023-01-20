import createInstanceTypeGuard from '../utils/create-instance-type-guard'

/**
 * A type guard for Set
 * ```
 * (a: unknown) => a is Set<any>
 * ```
 */
const isSet = createInstanceTypeGuard<Set<any>>(Set)

export default isSet
