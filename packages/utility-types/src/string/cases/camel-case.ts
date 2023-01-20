/**
 * # 🚫 DO NOT EXPORT
 */
interface Opts<A extends string = string> {
  value: A
}

/**
 * Transform a string `A` into camelcase splitting on `B`.
 * @alpha
 * @group String
 * @example
 * ```
 * type Ex1 = CamelCase<'hello world'>      // 'helloWorld'
 * type Ex2 = CamelCase<'foo-bar'>          // 'fooBar'
 * type Ex3 = CamelCase<'fizz_buzz'>        // 'fizzBuzz'
 * type Ex4 = CamelCase<'yip:yap:yup', ':'> // 'yipYapYup'
 * type Ex5 = CamelCase<'wee*woo*waa', '*'> // 'weeWooWaa'
 * ```
 */
export type CamelCase<
  A extends string,
  B extends string = ' ' | '-' | '_',
  C extends Opts = Opts<''>
> = A extends `${infer D}${B}${infer E}`
  ? C['value'] extends ''
    ? CamelCase<E, B, Opts<D>>
    : CamelCase<E, B, Opts<`${C['value']}${Capitalize<D>}${Capitalize<E>}`>>
  : C['value'] extends ''
  ? A
  : C['value']
