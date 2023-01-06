/**
 * Splits a string `A` into an array of substrings split on string `B`
 * @experimental
 * @example
 * ```
 * type Ex1 = Split<'abc'> // ['a', 'b', 'c']
 * type Ex2 = Split<'1,2,3', ','> // ['1', '2', '3']
 * ```
 */
export type Split<
  A extends string,
  B extends string = '',
  C extends string[] = []
> = B extends ''
  ? A extends `${infer D}${infer E}`
    ? Split<E, B, [...C, D]>
    : C
  : A extends `${string}${B}${string}`
  ? A extends `${infer D}${B}${infer E}`
    ? Split<E, B, [...C, D]>
    : never
  : [...C, A]

export {}
