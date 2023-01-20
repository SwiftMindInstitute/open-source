import { IsTruthy } from '../any'
import { If } from './if'

/**
 * If `IsTruthy<A>` then `IsTruthy<B>` else `IsTruthy<C>`
 * @beta
 * @group Condition
 * @group If
 * @example
 * ```
 * // If `IsTruthy<A>` then `IsTruthy<B>` else `IsTruthy<A>`
 * type Ex1 = Condition<true, true> // true
 * type Ex2 = Condition<1, 1>       // true
 * type Ex3 = Condition<0, true>    // false
 * type Ex4 = Condition<0, 1>       // false
 * // If `IsTruthy<A>` then `IsTruthy<B>` else `IsTruthy<C>`
 * type Ex3 = Condition<true, true, false>  // true
 * type Ex4 = Condition<1, 1, 0>            // true
 * type Ex5 = Condition<false, true, false> // false
 * type Ex6 = Condition<0, 1, 0>            // false
 * ```
 */
export type Condition<A, B, C = A> = If<A, IsTruthy<B>, IsTruthy<C>>
