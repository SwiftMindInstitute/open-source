import { And } from '../../logic/antecedent/and'
import { IsCaseSensitive } from '../antecedent/is-case-sensitive'
import { IsUppercase } from '../antecedent/is-uppercase'

/**
 * # 🚫 DO NOT EXPORT
 */
interface Opts<A extends string = string> {
  value: A
}

/**
 * Transform string `A` to snake-case split on `B` and uppercase letters
 * @alpha
 * @group String
 * @example
 * ```
 * type Ex1 = SnakeCase<'HelloWorld'>       // 'hello_world'
 * type Ex2 = SnakeCase<'foo-bar'>          // 'foo_bar'
 * type Ex3 = SnakeCase<'fizz_buzz'>        // 'fizz_buzz'
 * type Ex4 = SnakeCase<'yip:yap:yup', ':'> // 'yip_yap_yup'
 * type Ex5 = SnakeCase<'wee*woo*waa', '*'> // 'wee_woo_waa'
 * ```
 */
export type SnakeCase<
  A extends string,
  B extends string = ' ' | '-',
  C extends Opts = Opts<''>
> = A extends `${infer D}${infer E}`
  ? D extends B
    ? C['value'] extends ''
      ? SnakeCase<E, B, C>
      : SnakeCase<E, B, Opts<`${C['value']}_`>>
    : And<IsCaseSensitive<D>, IsUppercase<D>> extends true
    ? C['value'] extends ''
      ? SnakeCase<E, B, Opts<Lowercase<D>>>
      : SnakeCase<E, B, Opts<`${C['value']}_${Lowercase<D>}`>>
    : SnakeCase<E, B, Opts<`${C['value']}${D}`>>
  : C['value']
