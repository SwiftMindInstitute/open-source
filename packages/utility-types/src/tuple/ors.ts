import { AnyArray } from '@any/any-array'
import { IsEmptyArray } from '@identity/condition/is-array-identity'
import { Or } from '@logic/condition/or'

/**
 * Evaluate the disjunction of all elements of `A`
 * @experimental
 * @group Tuple
 * @example
 * ```
 * type Ex1 = Ors<[false, true, false]> // true
 * type Ex2 = Ors<[false, false, false]> // false
 * ```
 */
export type Ors<
  A extends AnyArray<boolean>,
  B extends boolean = false,
  C extends AnyArray<boolean> = A
> = IsEmptyArray<A> extends true
  ? false
  : C extends [infer D, ...infer E]
  ? D extends boolean
    ? E extends AnyArray<boolean>
      ? Or<B, D> extends true
        ? true
        : Ors<A, Or<B, D>, E>
      : never
    : never
  : B
