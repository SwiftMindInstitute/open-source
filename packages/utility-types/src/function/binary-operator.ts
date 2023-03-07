import { AnyFunction } from '../any'

/**
 * A generic binary operator interface
 * @alpha
 * @group Function
 * @example
 * ```
 * type Ex1 = BinaryOperator                 // (a: any, b: any) => any
 * type Ex2 = BinaryOperator<string>         // (a: string, b: string) => any
 * type Ex3 = BinaryOperator<string, number> // (a: string, b: number) => any
 * ```
 */
export interface BinaryOperator<
  A extends any = any,
  B extends any = A,
  C extends any = A
> extends AnyFunction<[A, B], C> {}
