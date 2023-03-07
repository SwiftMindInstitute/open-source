import { Constructor } from './constructor'

/**
 * Return the type of a class instance from its constructor `A`
 * @alpha
 * @group Function
 * @example
 * ```
 * type Ex = ConstructorReturnType<typeof RegExp> // RegExp
 * ```
 */
export type ConstructorReturnType<A extends Constructor> =
  A extends Constructor<any[], infer B> ? B : never

/**
 * Alias of `ArrayIdentity`
 * @experimental
 * @group Function
 */
export type InstanceOf<A extends Constructor> = ConstructorReturnType<A>
