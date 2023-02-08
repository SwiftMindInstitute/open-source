import { AnyFunction } from './any-function'

/**
 * Generic generator function interface
 * @alpha
 * @example
 * ```
 * type Ex = AnyGeneratorFunction // () => Generator<unknown, any, unknown>
 * ```
 */
export type AnyGeneratorFunction<
  A = unknown,
  B = any,
  C = unknown
> = AnyFunction<any[], Generator<A, B, C>>
