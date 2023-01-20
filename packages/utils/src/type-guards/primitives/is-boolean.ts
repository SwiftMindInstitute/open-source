import createTypeofTypeGuard from '../utils/create-typeof-type-guard'

/**
 * A type guard for boolean
 * ```
 * (a: unknown) => a is boolean
 * ```
 */
const isBoolean = createTypeofTypeGuard<boolean>('boolean')

export default isBoolean
