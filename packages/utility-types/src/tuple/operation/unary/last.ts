import { AnyArray } from '../../../any'

/**
 * Return the last entry of tuple `A`
 * @example
 * ```
 * type Ex = Last<['a', 'b', 'c']> // 'c'
 * ```
 */
export type Last<A extends AnyArray> = A extends [...AnyArray, infer B]
  ? B
  : A extends readonly [...AnyArray, infer C]
  ? C
  : never

export {}
