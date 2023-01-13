import { Not } from '@logic/condition/not'
import { IsFalsy } from './is-falsy'

/**
 * If `A extends AnyFalsy` then `false` else `true`
 * @example
 * ```
 * type Ex1 = IsTruthy<false> // false
 * type Ex2 = IsTruthy<''> // false
 * type Ex3 = IsTruthy<0> // false
 * type Ex4 = IsTruthy<null> // false
 * type Ex5 = IsTruthy<undefined> // false
 * type Ex6 = IsTruthy<true> // false
 * type Ex7 = IsTruthy<1> // false
 * type Ex8 = IsTruthy<'abc'> // false
 * type Ex9 = IsTruthy<[]> // false
 * type Ex10 = IsTruthy<{}> // false
 * ```
 */
export type IsTruthy<A> = Not<IsFalsy<A>>
