import { AnyFunction } from '../any'

/**
 * A generic unary operator interface
 * @beta
 * @group Any
 * @example
 * ```
 * type Ex1 = UnaryOperator          // (a: any) => any
 * type Ex2 = UnaryOperator<boolean> // (a: boolean) => boolean
 * ```
 */
export interface UnaryOperator<A = any, B = any> extends AnyFunction<[A], B> {}
