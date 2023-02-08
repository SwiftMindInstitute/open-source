import { PureIf } from './pure-if'

/**
 * # 🚫 DO NOT EXPORT FROM src/index.ts
 * Evaluate `A ? B : C` where `A`, `B`, and `C` are boolean
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
