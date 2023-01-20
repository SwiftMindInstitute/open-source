import createTypeofTypeGuard from '../utils/create-typeof-type-guard'

/**
 * A type guard for null
 * ```
 * (a: unknown) => a is null
 * ```
 */
const isNull = createTypeofTypeGuard<null>('null')

export default isNull
