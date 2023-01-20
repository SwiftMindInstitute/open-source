import { AnyArray } from '../any/any-array'
import { Add } from '../math/add'
import { IsLessThan } from '../math/condition/is-less-than'
import { LengthProp } from '../object/length-prop'

/**
 * Return a slice of a tuple starting at index `A` ending at index `B`
 * @beta
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
  ? IsLessThan<Add<B, LengthProp<D>>, C> extends true
    ? IsLessThan<Add<B, LengthProp<D>>, LengthProp<A>> extends true
      ? Slice<A, B, C, [...D, A[Add<B, LengthProp<D>>]]>
      : D
    : D
  : []
