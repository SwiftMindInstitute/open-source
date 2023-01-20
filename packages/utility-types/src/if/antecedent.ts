import { IsTruthy } from '../any'
import { If } from './if'

/**
 * If `IsTruthy<A>` then `IsTruthy<B>` else `IsTruthy<C>`
 * @beta
 * @group Antecedent
 * @group If
 * @example
 * ```
 * // If `IsTruthy<A>` then `IsTruthy<B>` else `IsTruthy<A>`
 * type Ex1 = Antecedent<true, true> // true
 * type Ex2 = Antecedent<1, 1>       // true
 * type Ex3 = Antecedent<0, true>    // false
 * type Ex4 = Antecedent<0, 1>       // false
 * // If `IsTruthy<A>` then `IsTruthy<B>` else `IsTruthy<C>`
 * type Ex3 = Antecedent<true, true, false>  // true
 * type Ex4 = Antecedent<1, 1, 0>            // true
 * type Ex5 = Antecedent<false, true, false> // false
 * type Ex6 = Antecedent<0, 1, 0>            // false
 * ```
 */
export type Antecedent<A, B, C = A> = If<A, IsTruthy<B>, IsTruthy<C>>
