import createTypeofTypeGuard from '../utils/create-typeof-type-guard'

/**
 * A type guard for number
 * ```
 * (a: unknown) => a is number
 * ```
 */
const isNumber = createTypeofTypeGuard<number>('number')

export default isNumber
