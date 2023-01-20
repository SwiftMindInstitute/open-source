import createTypeofTypeGuard from '../utils/create-typeof-type-guard'

/**
 * A type guard for string
 * ```
 * (a: unknown) => a is string
 * ```
 */
const isString = createTypeofTypeGuard<string>('string')

export default isString
