/**
 * Generic array interface
 * @group Any
 * @example
 * ```
 * type Ex1 = AnyArray         // any[] | readonly any[]
 * type Ex2 = AnyArray<number> // number[] | readonly number[]
 * ```
 * */
export type AnyArray<A = any> = A[] | readonly A[]

export {}
