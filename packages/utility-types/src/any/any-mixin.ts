import { AnyConstructor } from './any-constructor'
import { AnyFunction } from './any-function'

/**
 * Generic mixin interface
 * @experimental
 * @group Any
 * @example
 * ```
 * type Ex = AnyMixin = (..._: any[]) => { new (..._: any[]) => any }
 * ```
 */
export type AnyMixin<
  A extends AnyConstructor = AnyConstructor,
  B extends any = any
> = AnyFunction<[A], B>
