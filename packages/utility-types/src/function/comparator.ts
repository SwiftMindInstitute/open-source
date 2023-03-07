import { AnyFunction } from '../any/any-function'

/**
 * A generic comparator interface
 * @alpha
 * @group Function
 * @example
 * ```
 * type Ex1 = Comparator         // (a: any, b: any): number
 * type Ex2 = Comparator<string> // (a: string, b: string): number
 * ```
 */
export interface Comparator<A = any> extends AnyFunction<[A, A], number> {}
