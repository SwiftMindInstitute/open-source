import { Constructor } from '@swiftmind/utility-types'
import createTypeGuard from './create-type-guard'

/**
 * A generalized type guard factory for class instances
 * ```
 * <A>(Class: AnyConstructor) => (a: unknown) => a is A
 * ```
 */
const createInstanceTypeGuard = <A>(Class: Constructor) =>
  createTypeGuard<A>(value => value instanceof Class)

export default createInstanceTypeGuard
