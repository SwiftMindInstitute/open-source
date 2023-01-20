import { IsEqual } from '../../any/condition/is-equal'
import { IsZero } from '../../identity/condition/is-number-additive-identity'
import { Or } from '../../logic/condition/or'
import { Subtract } from '../subtract'

/**
 * Evaluate `A < B`, where `A ∈ ℕ` and `B ∈ ℕ`
 * @beta
 * @group Condition
 * @group Math
 * @example
 * ```
 * type Ex1 = IsLessThan<1, 3> // true
 * type Ex2 = IsLessThan<3, 1> // false
 * ```
 */
export type IsLessThan<A extends number, B extends number> = Or<
  IsZero<A>,
  IsZero<B>
> extends true
  ? IsEqual<A, B> extends true
    ? false
    : IsZero<A> extends true
    ? true
    : false
  : IsLessThan<Subtract<A, 1>, Subtract<B, 1>>
