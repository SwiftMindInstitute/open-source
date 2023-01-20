import { AnyFunction } from '@bluesky.llc/utility-types'

/**
 * A generalized type guard factory
 * ```
 * <A>(callback: AnyFunction<[unknown], boolean>) => (a: unknown) => a is A
 * ```
 */
const createTypeGuard = <A>(callback: AnyFunction<[unknown], boolean>) => {
  return (a: unknown): a is A => callback(a)
}

export default createTypeGuard
