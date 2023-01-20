import { AnyArray } from '../any/any-array'
import { Options } from '../helpers/options'
import { IsEmptyArray } from '../identity/antecedent/is-array-concat-identity'
import { And } from '../logic/antecedent/and'
import { Prepend } from './prepend'

/**
 * 🚫 DO NOT EXPORT
 * @internal
 */
interface Opts<A extends boolean = boolean, B extends AnyArray = AnyArray>
  extends Options<'Ands'> {
  value: A
  rest: B
}

/**
 * Evaluate the conjunction of all entries of `A`
 * @alpha
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
  : Z['rest'] extends Prepend<infer C, infer B>
  ? B extends boolean
    ? And<Z['value'], B> extends true
      ? Ands<A, Opts<And<Z['value'], B>, C>>
      : false
    : never
  : Z['value']
