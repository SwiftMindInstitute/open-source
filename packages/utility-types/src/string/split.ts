import { Options } from '../helpers/options'

/**
 * # 🚫 DO NOT EXPORT
 */
interface Opts<A extends string[] = string[]> extends Options {
  value: A
}

/**
 * Splits a string `A` into an array of substrings split on string `B`
 * @beta
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
  Z extends Opts = Opts<[]>
> = B extends ''
  ? A extends `${infer D}${infer E}`
    ? Split<E, B, Opts<[...Z['value'], D]>>
    : Z['value']
  : A extends `${string}${B}${string}`
  ? A extends `${infer D}${B}${infer E}`
    ? Split<E, B, Opts<[...Z['value'], D]>>
    : never
  : [...Z['value'], A]
