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
 * Transform string `A` to kebab-case split on `B` and uppercase letters
 * @alpha
 * @group String
 * @example
 * ```
 * type Ex1 = KebabCase<'HelloWorld'>       // 'hello-world'
 * type Ex2 = KebabCase<'foo-bar'>          // 'foo-bar'
 * type Ex3 = KebabCase<'fizz_buzz'>        // 'fizz-buzz'
 * type Ex4 = KebabCase<'yip:yap:yup', ':'> // 'yip-yap-yup'
 * type Ex5 = KebabCase<'wee*woo*waa', '*'> // 'wee-woo-waa'
 * ```
 */
export type KebabCase<
  A extends string,
  B extends string = ' ' | '_',
  Z extends Opts = Opts<''>
> = A extends `${infer D}${infer E}`
  ? D extends B
    ? Z['value'] extends ''
      ? KebabCase<E, B, Z>
      : KebabCase<E, B, Opts<`${Z['value']}-`>>
    : And<IsCaseSensitive<D>, IsUppercase<D>> extends true
    ? Z['value'] extends ''
      ? KebabCase<E, B, Opts<Lowercase<D>>>
      : KebabCase<E, B, Opts<`${Z['value']}-${Lowercase<D>}`>>
    : KebabCase<E, B, Opts<`${Z['value']}${D}`>>
  : Z['value']
