/**
 * Generic array interface
 * @example
 * ```
 * type Ex1 = AnyArray // any[] | readonly any[]
 * ```
 * @example
 * ```
 * type Ex2 = AnyArray<number> // number[] | readonly number[]
 * ```
 * */
export type AnyArray<A extends any = any> = A[] | readonly A[]

/**
 * Generic function interface
 * @example
 * ```
 * type Ex1 = AnyFunction // (..._: any[]) => any
 * ```
 * @example
 * ```
 * type Ex2 = AnyFunction<[string]> // (a: string) => any
 * ```
 * @example
 * ```
 * type Ex3 = AnyFunction<[number, number], number> // (a: number, b: number) => number
 * ```
 */
export type AnyFunction<A extends any[] = any[], B extends any = any> = (
  ..._: A
) => B

/**
 * A generic class constructior interface.
 * @example
 * ```
 * type Ex = AnyConstructor<[number, number]> // { new (a: number, b: number): void }
 * ```
 */
export interface AnyConstructor<A extends any[] = any[]> {
  new (..._: A): void
}

/**
 * Type that can be used for any key
 * @example
 * ```
 * type Ex = Record<AnyKey, any> = Record<string | number | symbol, any>
 * ```
 */
export type AnyKey = keyof any

/**
 * Generic object interface
 * @example
 * ```
 * type Ex1 = AnyObject //
 * ```
 */
export type AnyObject<A extends AnyKey = AnyKey, B extends any = any> = {
  [C in A]: B
}

/**
 * Create a tuple of length `A` with entries of type `B` (defaults to `any`)
 * @example
 * ```
 * type Ex1 = Tuple<2> // [any, any]
 * ```
 * @example
 * ```
 * type Ex2 = Tuple<3, number> // [number, number, number]
 * ```
 */
export type AnyTuple<
  A extends number,
  B extends any = any,
  C extends any[] = []
> = C extends {
  length: A
}
  ? C
  : AnyTuple<A, B, [...C, B]>
