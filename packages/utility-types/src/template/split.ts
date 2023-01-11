import { Opts } from '../helpers'

/**
 * Recursive options for Split
 * @internal
 */
type SplitOpts<A extends number | string[] = string[]> = Opts<
  'Split',
  { value: A }
>

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
  O extends SplitOpts = SplitOpts<[]>
> = B extends ''
  ? A extends `${infer D}${infer E}`
    ? Split<E, B, SplitOpts<[...O['value'], D]>>
    : O['value']
  : A extends `${string}${B}${string}`
  ? A extends `${infer D}${B}${infer E}`
    ? Split<E, B, SplitOpts<[...O['value'], D]>>
    : never
  : [...O['value'], A]

export {}
