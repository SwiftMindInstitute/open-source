import createTypeofTypeGuard from '../utils/create-typeof-type-guard'

/**
 * A type guard for bigint
 * ```
 * (a: unknown) => a is bigint
 * ```
 */
const isBigint = createTypeofTypeGuard<bigint>('bigint')

export default isBigint
