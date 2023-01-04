import { AnyArray } from '../any'

/**
 * Return the length of tuple `A`
 * @example
 * ```
 * type Ex = Length<['a', 'b', 'c']> // 3
 * ```
 */
export type Length<A extends AnyArray> = A extends { length: infer B }
  ? B
  : never

export {}
