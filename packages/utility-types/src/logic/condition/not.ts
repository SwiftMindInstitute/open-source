import { PureCondition } from '../../helpers'

/**
 * Evaluate `¬A`
 * @beta
 * @group Condition
 * @group Logic
 * @example
 * ```
 * type Ex1 = Not<true>  // false
 * type Ex2 = Not<false> // true
 * ```
 */
export type Not<A extends boolean> = PureCondition<A, false, true>
