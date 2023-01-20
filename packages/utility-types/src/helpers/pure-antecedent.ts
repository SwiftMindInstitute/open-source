import { PureIf } from './pure-if'

/**
 * Evaluate `A ? B : C`
 * @internal
 * @example
 * ```
 * type Not<A> = PureAntecedent<A, false, true>
 * ```
 */
export type PureAntecedent<
  A extends boolean,
  B extends boolean = A,
  C extends boolean = A
> = PureIf<A, B, C>
