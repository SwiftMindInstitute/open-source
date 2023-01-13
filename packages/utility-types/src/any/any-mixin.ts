import { AnyConstructor } from './any-constructor'
import { AnyFunction } from './any-function'

/**
 * Generic mixin interface
 * @experimental
 * @group Any
 * @example
 */
export type AnyMixin<A extends AnyConstructor = AnyConstructor> = AnyFunction<
  [AnyConstructor],
  A
>
