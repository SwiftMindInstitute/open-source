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
 *
 * Return a slice of a tuple starting at index `A` ending at index `B`
 * @example
 * ```
 * type Ex1 = Slice<[1, 2, 3], 1> // [2, 3]
 * type Ex2 = Slice<['a', 'b', 'c'], 1, 2> // ['b']
 * ```
 */
export type Slice = never
// export type Slice<
//   A extends AnyArray,
//   B extends number = 0,
//   C extends number = Length<A>,
//   D extends AnyArray = []
// > = LessThan<B, Length<A>> extends true
//   ? LessThan<Add<B, Length<D>>, C> extends true
//     ? LessThan<Add<B, Length<D>>, Length<A>> extends true
//       ? Slice<A, B, C, [...D, A[Add<B, Length<D>>]]>
//       : D
//     : D
//   : []

export {}
