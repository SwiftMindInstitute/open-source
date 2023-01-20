import { PureCondition } from '../../helpers'
/**
 * Evaluate `A ∧ B`
 * @beta
 * @group Condition
 * @group Logic
 * @example
 * ```
 * type Ex1 = And<true, true>   // true
 * type Ex2 = And<true, false>  // false
 * type Ex3 = And<false, true>  // false
 * type Ex4 = And<false, false> // false
 * ```
 */
export type And<A extends boolean, B extends boolean> = PureCondition<A, B, A>
