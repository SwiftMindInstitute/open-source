import { AnyConstructor } from '../any/any-constructor'

/**
 * Return the type of a class instance from its constructor `A`
 * @alpha
 * @example
 * ```
 * type Ex = ConstructorReturnType<typeof RegExp> // RegExp
 * ```
 */
export type ConstructorReturnType<A extends AnyConstructor> =
  A extends AnyConstructor<any[], infer B> ? B : never
