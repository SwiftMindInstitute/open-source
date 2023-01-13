import { And } from './and'
import { Not } from './not'
import { Or } from './or'

/**
 * If `A ⊻ B` then `true` else `false` where `A extends boolean` and `B extends
 * @group Condition
 * @group Logic
 * @example
 * ```
 * type Ex1 = Xor<true, true>   // false
 * type Ex2 = Xor<true, false>  // true
 * type Ex3 = Xor<false, true>  // true
 * type Ex4 = Xor<false, false> // false
 * ```
 */
export type Xor<A extends boolean, B extends boolean> = And<
  Or<A, B>,
  Not<And<A, B>>
>

export {}
