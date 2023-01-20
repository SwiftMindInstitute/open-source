import { AnyArray } from '../any/any-array'

/**
 * Extract the indices from a tuple `A`
 * @beta
 * @group Tuple
 * @example
 * ```
 * type Ex = IndexOf<['a', 'b']> // '0' | '1'
 * ```
 */
export type IndexOf<A extends AnyArray> = {
  [B in keyof A]: B extends `${number}` ? B : never
}[number]
