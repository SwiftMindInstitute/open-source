import createTypeofTypeGuard from '../utils/create-typeof-type-guard'

/**
 * A type guard for undefined
 * ```
 * (a: unknown) => a is undefined
 * ```
 */
const isUndefined = createTypeofTypeGuard<undefined>('undefined')

export default isUndefined
