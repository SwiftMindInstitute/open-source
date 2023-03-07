import { AnyArray, AnyFunction } from '../any'

/**
 * Generic generator function interface
 * @alpha
 * @example
 * ```
 * type Ex = GeneratorFactory           // (..._: any[]) => Generator
 * type Ex = GeneratorFactory<[number]> // (..._: [number]) => Generator
 * ```
 */
export interface GeneratorFactory<
  A extends AnyArray = AnyArray,
  B extends Generator = Generator
> extends AnyFunction<A, B> {}
