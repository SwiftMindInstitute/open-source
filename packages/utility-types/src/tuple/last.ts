import { AnyArray } from '@any/any-array'
import { Append } from './append'
/**
 * Return the last entry of tuple `A`
 * @example
 * ```
 * type Ex = Last<['a', 'b', 'c']> // 'c'
 * ```
 */
export type Last<A extends AnyArray> = A extends Append<any[], infer B>
  ? B
  : never

export {}
