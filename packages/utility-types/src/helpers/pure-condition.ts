import { PureIf } from './pure-if'

/**
 * Evaluate `A ? B : C`
 * @internal
 * @example
 * ```
 * type Not<A> = Condition<A, false, true>
 * ```
 */
export type PureCondition<
  A extends boolean,
  B extends boolean = A,
  C extends boolean = A
> = PureIf<A, B, C>
