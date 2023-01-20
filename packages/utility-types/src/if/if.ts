import { IsTruthy } from '../any/antecedent/is-truthy'

/**
 * If `IsTruthy<A> extends true` then `B` else `C`
 * @beta
 * @group Antecedent
 * @group If
 * @example
 * ```
 * // If `IsTruthy<A>` then `A` else `never`
 * type Ex1 = If<true>                     // true
 * type Ex2 = If<'Hello'>                  // 'Hello'
 * type Ex3 = If<false>                    // never
 * type Ex4 = If<0>                        // never
 * // If `IsTruthy<A>` then `B` else `never`
 * type Ex5 = If<true, 'apple'>            // 'apple
 * type Ex6 = If<1, 'apple'>               // 'apple'
 * type Ex7 = If<false, 'apple'>           // never
 * type Ex8 = If<0, 'apple'>               // never
 * // If `IsTruthy<A>` then `B` else `C`
 * type Ex9 = If<true, 'apple', 'orange'>  // 'apple'
 * type Ex10 = If<1, 'apple', 'orange'>    // 'apple
 * type Ex11 = If<true, 'apple', 'orange'> // 'orange
 * type Ex12 = If<0, 'apple', 'orange'>    // 'orange'
 * ```
 */
export type If<A, B = A, C = never> = IsTruthy<A> extends true ? B : C
