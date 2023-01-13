import { AnyArray } from '@any/any-array'
import { IsEmptyArray } from '@identity/condition/is-array-identity'
import { And } from '@logic/condition/and'

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
  A extends AnyArray<boolean>,
  B extends boolean = true,
  C extends AnyArray<boolean> = A
> = IsEmptyArray<A> extends true
  ? false
  : C extends [infer D, ...infer E]
  ? D extends boolean
    ? E extends AnyArray<boolean>
      ? And<B, D> extends true
        ? Ands<A, And<B, D>, E>
        : false
      : never
    : never
  : B
