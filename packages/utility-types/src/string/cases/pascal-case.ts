/**
 * # 🚫 DO NOT EXPORT
 */
interface Opts<A extends string = string> {
  value: A
}

/**
 * Transform any string
 * @alpha
 * @group String
 * @example
 * ```
 * type Ex1 = PascalCase<'hello world'>      // 'HelloWorld'
 * type Ex2 = PascalCase<'foo-bar'>          // 'FooBar'
 * type Ex3 = PascalCase<'fizz_buzz'>        // 'FizzBuzz'
 * type Ex4 = PascalCase<'yip:yap:yup', ':'> // 'YipYapYup'
 * type Ex5 = PascalCase<'wee*woo*waa', '*'> // 'WeeWooWaa'
 * ```
 */
export type PascalCase<
  A extends string,
  B extends string = ' ' | '-' | '_',
  C extends Opts = Opts<''>
> = A extends `${infer D}${B}${infer E}`
  ? PascalCase<E, B, Opts<`${C['value']}${Capitalize<D>}`>>
  : C['value'] extends ''
  ? A
  : `${C['value']}${Capitalize<A>}`
