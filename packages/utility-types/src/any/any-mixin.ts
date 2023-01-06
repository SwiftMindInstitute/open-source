import { AnyConstructor } from './any-constructor'
import { AnyFunction } from './any-function'

export type AnyMixin<A extends AnyConstructor = AnyConstructor> = AnyFunction<
  [AnyConstructor],
  A
>
