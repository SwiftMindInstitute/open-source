import { IsEqual } from '../../any/relation/is-equal'
import { Subtract } from '../operation/subtract'
import { SomeZero } from '../utils'

/**
 * Evaluate `A < B`, where `A ∈ ℕ` and `B ∈ ℕ`
 * @example
 * ```
 * type Ex1 = LessThan<1, 3> // true
 * type Ex2 = LessThan<3, 1> // false
 * ```
 */
export type LessThan<A extends number, B extends number> = SomeZero<
  A,
  B
> extends true
  ? IsEqual<A, B> extends true
    ? false
    : A extends 0
    ? true
    : false
  : LessThan<Subtract<A, 1>, Subtract<B, 1>>

export {}
