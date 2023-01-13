import { AnyArray } from '@any/any-array'

/**
 * Extract the indices from a tuple `A`
 * @experimental
 * @group Tuple
 * @example
 * ```
 * type Ex = KeyOf<['a', 'b']> // '0' | '1'
 * ```
 */
export type IndexOf<A extends AnyArray> = {
  [B in keyof A]: A[B] extends A[number] ? B : never
}[number]

export {}
