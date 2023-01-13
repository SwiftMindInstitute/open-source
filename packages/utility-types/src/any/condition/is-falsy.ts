import { AnyFalsy } from '@any/any-falsy'

/**
 * If `A extends AnyFalsy` then `true` else `false`
 * @example
 * ```
 * type Ex1 = IsFalsy<false> // true
 * type Ex2 = IsFalsy<''> // true
 * type Ex3 = IsFalsy<0> // true
 * type Ex4 = IsFalsy<null> // true
 * type Ex5 = IsFalsy<undefined> // true
 * type Ex6 = IsFalsy<true> // false
 * type Ex7 = IsFalsy<1> // false
 * type Ex8 = IsFalsy<'abc'> // false
 * type Ex9 = IsFalsy<[]> // false
 * type Ex10 = IsFalsy<{}> // false
 * ```
 */
export type IsFalsy<A> = A extends AnyFalsy ? true : false

export {}
