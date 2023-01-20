import createTypeGuard from './create-type-guard'

/**
 * A generalized type guard factory for types that have a unique typeof string.
 * ```
 * <A>(typeName: string) => (a: unknown) => a is A
 * ```
 */
const createTypeofTypeGuard = <A>(typeName: string) =>
  createTypeGuard<A>(value => typeof value === typeName)

export default createTypeofTypeGuard
