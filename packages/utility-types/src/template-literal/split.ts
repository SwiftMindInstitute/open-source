/**
 * Splits a string `A` into an array of substrings split on string `B`
 * @experimental
 * @example
 * ```
 * type Ex1 = Split<'a.b.c'> // ['a', 'b', 'c']
 * type Ex2 = Split<'1,2,3', ','> // ['1', '2', '3']
 * ```
 */
export type Split<
  A extends string,
  B extends string = '.',
  C extends string[] = []
> = A extends `${string}${B}${string}`
  ? A extends `${infer D}${B}${infer E}`
    ? Split<E, B, [...C, D]>
    : never
  : [...C, A]

export {}
