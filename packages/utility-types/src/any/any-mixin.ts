import { AnyConstructor } from './any-constructor'

/**
 * Generic mixin interface
 * @beta
 * @group Any
 * @example
 * ```
 * type Ex = AnyMixin // <A extends AnyConstructor>(a: A) => any
 * ```
 */
export type AnyMixin<A extends any = any> = {
  <B extends AnyConstructor>(b: B): A
}
