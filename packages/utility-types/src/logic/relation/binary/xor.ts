import { Not } from '../unary/not'
import { And } from './and'
import { Or } from './or'

/**
 * If `A ∨ B` then `true` else `false` where `A extends boolean` and `B extends
 * @example
 * ```
 * type Ex1 = Xor<true, true> // false
 * type Ex2 = Xor<true, false> // true
 * type Ex3 = Xor<false, true> // false
 * type Ex4 = Xor<false, false> // false
 * ```
 */
export type Xor<A extends boolean, B extends boolean> = Or<A, B> extends true
  ? Not<And<A, B>>
  : false

export {}
