import { IsFalsy } from './is-falsy'

/**
 * If `A extends AnyFalsy` then `false` else `true`
 * @beta
 * @group Antecedant
 * @group Any
 * @example
 * ```
 * type Ex1 = IsTruthy<false>     // false
 * type Ex2 = IsTruthy<''>        // false
 * type Ex3 = IsTruthy<0>         // false
 * type Ex4 = IsTruthy<null>      // false
 * type Ex5 = IsTruthy<undefined> // false
 * type Ex6 = IsTruthy<true>      // true
 * type Ex7 = IsTruthy<1>         // true
 * type Ex8 = IsTruthy<'abc'>     // true
 * type Ex9 = IsTruthy<[]>        // true
 * type Ex10 = IsTruthy<{}>       // true
 * ```
 */
export type IsTruthy<A> = IsFalsy<A> extends true ? false : true
