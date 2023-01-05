import { AnyArray } from '@any/any-array'

/**
 * Return a union of the types of entries in `A`
 * @example
 * ```
 * type Ex = In<[1, 'a']> // number | string
 * ```
 */
export type In<A extends AnyArray> = A extends (infer B)[]
  ? B
  : A extends readonly (infer C)[]
  ? C
  : never

export {}
