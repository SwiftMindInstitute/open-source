import createTypeofTypeGuard from '../utils/create-typeof-type-guard'

/**
 * A type guard for symbol
 * ```
 * (a: unknown) => a is symbol
 * ```
 */
const isSymbol = createTypeofTypeGuard<symbol>('symbol')

export default isSymbol
