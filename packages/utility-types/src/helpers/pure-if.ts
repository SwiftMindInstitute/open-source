/**
 * If `IsTruthy<A> extends true` then `B` else `C`
 * @internal
 * @example
 * ```
 * // If `A extends true` then `A` else `never`
 * type Ex1 = PureIf<true>                     // true
 * // If `A extends true` then `B` else `never`
 * type Ex5 = PureIf<true, 'apple'>            // 'apple
 * type Ex7 = PureIf<false, 'apple'>           // never
 * // If `A extends true` then `B` else `C`
 * type Ex9 = PureIf<true, 'apple', 'orange'>  // 'apple'
 * type Ex11 = PureIf<true, 'apple', 'orange'> // 'orange
 * ```
 */
export type PureIf<A extends boolean, B = A, C = A> = A extends true ? B : C
