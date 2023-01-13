/**
 * Splits a string `A` into an array of substrings split on string `B`
 * @experimental
 * @group String
 * @example
 * ```
 * type Ex1 = Split<'abc'>        // ['a', 'b', 'c']
 * type Ex2 = Split<'1,2,3', ','> // ['1', '2', '3']
 * ```
 */
export type Split<
  A extends string,
  B extends string = '',
  Z extends string[] = []
> = B extends ''
  ? A extends `${infer D}${infer E}`
    ? Split<E, B, [...Z, D]>
    : Z
  : A extends `${string}${B}${string}`
  ? A extends `${infer D}${B}${infer E}`
    ? Split<E, B, [...Z, D]>
    : never
  : [...Z, A]

export {}
