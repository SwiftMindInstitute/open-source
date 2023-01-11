import { IsEqual } from '@any/condition/is-equal'
import { Subtract } from '../subtract'
import { IsZero } from './is-zero'
import { SomeZero } from './some-zero'

/**
 * Evaluate `A < B`, where `A ∈ ℕ` and `B ∈ ℕ`
 * @example
 * ```
 * type Ex1 = IsLessThan<1, 3> // true
 * type Ex2 = IsLessThan<3, 1> // false
 * ```
 */
export type IsLessThan<A extends number, B extends number> = SomeZero<
  A,
  B
> extends true
  ? IsEqual<A, B> extends true
    ? false
    : IsZero<A> extends true
    ? true
    : false
  : IsLessThan<Subtract<A, 1>, Subtract<B, 1>>

export {}
