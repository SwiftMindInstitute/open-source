import { Options } from 'prettier'
import { AnyArray } from '../any/any-array'

/**
 * # 🚫 DO NOT EXPORT
 */
interface Opts<A extends AnyArray = AnyArray> extends Options {
  value: A
}

/**
 * Reverse the elements of `A`
 * @beta
 * @group Tuple
 * @example
 * ```
 * type Ex = Reverse<[1, 2, 3, 4]> // [4, 3, 2, 1]
 * ```
 */
export type Reverse<A extends AnyArray, Z extends Opts = Opts<[]>> = A extends [
  ...infer B,
  infer C
]
  ? Reverse<B, Opts<[...Z['value'], C]>>
  : Z['value']
