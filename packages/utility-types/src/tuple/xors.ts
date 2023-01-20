import { AnyArray } from '../any/any-array'
import { Options } from '../helpers/options'
import { IsEmptyArray } from '../identity/condition/is-array-concat-identity'
import { Xor } from '../logic/condition/xor'

/**
 * 🚫 DO NOT EXPORT
 * @internal
 */
interface Opts<A extends boolean = boolean, B extends AnyArray = AnyArray>
  extends Options<'Zors'> {
  value: A
  rest: B
}

/**
 * Evaluate the exclusive disjunction of all elements of `A`
 * @alpha
 * @group Tuple
 * @example
 * ```
 * type Ex1 = Xors<[true, true, true]>    // false
 * type Ex2 = Xors<[false, true, true]>   // false
 * type Ex3 = Xors<[false, false, true]>  // true
 * type Ex4 = Xors<[false, false, false]> // false
 * ```
 */
export type Xors<
  A extends AnyArray,
  Z extends Opts = Opts<false, A>
> = IsEmptyArray<A> extends true
  ? false
  : Z['rest'] extends [infer B, ...infer C]
  ? B extends boolean
    ? Z['value'] extends true
      ? Xor<Z['value'], B> extends true
        ? Xors<A, Opts<Xor<Z['value'], B>, C>>
        : false
      : Xors<A, Opts<Xor<Z['value'], B>, C>>
    : never
  : Z['value']
