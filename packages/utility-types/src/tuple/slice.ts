/**
 * DO NOT USE!
 * ===========
 *
 * Tragically broke with TypeScript 4.9.4!
 *
 * TODO(hao) Investigate why this type started failing with the following.
 * ```
 * // Type 'Add<B, Length<D>>' does not satisfy the constraint 'number'.
 * //  Type 'Length<[...AnyTuple<B, any, []>, ...AnyTuple<Length<D>, any, []>]>' is not assignable to type 'number'.
 * //   Type 'unknown' is not assignable to type 'number'.ts(2344)
 * ```
 *
 * > I'm not ready to mark this as deprecated yet I would like to file a bug with
 * > the TypeScript team. -- hao
 * >
 * > [Link to bug](https://github.com/microsoft/TypeScript/issues/52098)
 */

import { AnyArray } from '../any/any-array'
import { Add } from '../math/add'
import { IsLessThan } from '../math/condition/is-less-than'
import { LengthProp } from '../prop/length-prop'

/**
 * Return a slice of a tuple starting at index `A` ending at index `B`
 * @deprecated
 * @group Tuple
 * @example
 * ```
 * type Ex1 = Slice<[1, 2, 3], 1>          // [2, 3]
 * type Ex2 = Slice<['a', 'b', 'c'], 1, 2> // ['b']
 * ```
 */
export type Slice<
  A extends AnyArray,
  B extends number = 0,
  C extends number = LengthProp<A>,
  D extends AnyArray = []
> = IsLessThan<B, LengthProp<A>> extends true
  ? // @ts-ignore
    IsLessThan<Add<B, LengthProp<D>>, C> extends true
    ? // @ts-ignore
      IsLessThan<Add<B, LengthProp<D>>, LengthProp<A>> extends true
      ? // @ts-ignore
        Slice<A, B, C, [...D, A[Add<B, LengthProp<D>>]]>
      : D
    : D
  : []

export {}
