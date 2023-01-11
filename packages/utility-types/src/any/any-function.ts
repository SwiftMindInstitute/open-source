import { AnyArray } from './any-array'

/**
 * Generic function interface
 * @example
 * ```
 * type Ex1 = AnyFunction // (..._: any[]) => any
 * type Ex2 = AnyFunction<[string]> // (a: string) => any
 * type Ex3 = AnyFunction<[number, number], number> // (a: number, b: number) => number
 * ```
 */
export type AnyFunction<A extends AnyArray = AnyArray, B = any> = (..._: A) => B

export {}
