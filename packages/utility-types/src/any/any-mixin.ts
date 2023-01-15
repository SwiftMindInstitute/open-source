import { AnyConstructor } from './any-constructor'

/**
 * Generic mixin interface
 * @experimental
 * @group Any
 * @example
 * ```
 * type Ex = AnyMixin // <A extends AnyConstructor>(..._: A) => AnyConstructor & A
 * ```
 */
export type AnyMixin = <A extends AnyConstructor = AnyConstructor>(
  a: A
) => AnyConstructor & A

export {}
