import { AnyArray } from '../any/any-array'
import { IsTruthy } from '../any/condition/is-truthy'
import { Options } from '../experiments/options'
import { IsEmptyArray } from '../identity/condition/is-array-identity'
import { And } from '../logic/condition/and'

interface Opts<A extends boolean = boolean, B extends AnyArray = AnyArray>
  extends Options<'Ands'> {
  value: A
  rest: B
}

/**
 * Evaluate the conjunction of all entries of `A`
 * @experimental
 * @group Tuple
 * @example
 * ```
 * type Ex1 = Ands<[true, true, true]>  // true
 * type Ex2 = Ands<[true, true, false]> // false
 * ```
 */
export type Ands<
  A extends AnyArray,
  Z extends Opts = Opts<true, A>
> = IsEmptyArray<A> extends true
  ? false
  : Z['rest'] extends [infer D, ...infer E]
  ? And<IsTruthy<Z['value']>, IsTruthy<D>> extends true
    ? Ands<A, Opts<And<IsTruthy<Z['value']>, IsTruthy<D>>, E>>
    : false
  : Z['value']
