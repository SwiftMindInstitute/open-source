import { SnakeCase } from './snake-case'

/**
 * Transform string `A` to snake-case split on `B` and uppercase letters
 * @alpha
 * @group String
 * @example
 * ```
 * type Ex1 = ScreamingSnakeCase<'HelloWorld'>       // 'HELLO_WORLD'
 * type Ex2 = ScreamingSnakeCase<'foo-bar'>          // 'FOO_BAR'
 * type Ex3 = ScreamingSnakeCase<'fizz_buzz'>        // 'FIZZ_BUZZ'
 * type Ex4 = ScreamingSnakeCase<'yip:yap:yup', ':'> // 'YIP_YAP_YUP'
 * type Ex5 = ScreamingSnakeCase<'wee*woo*waa', '*'> // 'WEE_WOO_WAA'
 * ```
 */
export type ScreamingSnakeCase<
  A extends string,
  B extends string = ' ' | '-'
> = Uppercase<SnakeCase<A, B>>
