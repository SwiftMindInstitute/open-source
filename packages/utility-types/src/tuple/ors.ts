import { AnyArray } from '../any/any-array'
import { Options } from '../helpers/options'
import { IsEmptyArray } from '../identity/condition/is-array-concat-identity'
import { Or } from '../logic/condition/or'
import { Prepend } from './prepend'

/**
 * 🚫 DO NOT EXPORT
 */
interface Opts<A extends boolean = boolean, B extends AnyArray = AnyArray>
  extends Options<'Ors'> {
  value: A
  rest: B
}

/**
 * Evaluate the disjunction of all elements of `A`
 * @alpha
 * @group Tuple
 * @example
 * ```
 * type Ex1 = Ors<[false, true, false]>  // true
 * type Ex2 = Ors<[false, false, false]> // false
 * ```
 */
export type Ors<
  A extends AnyArray,
  Z extends Opts = Opts<false, A>
> = IsEmptyArray<A> extends true
  ? false
  : Z['rest'] extends Prepend<infer C, infer B>
  ? B extends boolean
    ? Or<Z['value'], B> extends true
      ? true
      : Ors<A, Opts<Or<Z['value'], B>, C>>
    : never
  : Z['value']
