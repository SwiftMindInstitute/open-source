import { AnyArray } from '../any/any-array'
import { IsEmptyArray } from '../identity/condition/is-array-identity'
import { Xor } from '../logic/condition/xor'

/**
 * Evaluate the exclusive disjunction of all elements of `A`
 * @experimental
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
  A extends AnyArray<boolean>,
  B extends boolean = false,
  C extends AnyArray<boolean> = A
> = IsEmptyArray<A> extends true
  ? false
  : C extends [infer D, ...infer E]
  ? D extends boolean
    ? E extends AnyArray<boolean>
      ? Xors<A, Xor<B, D>, E>
      : never
    : never
  : B
