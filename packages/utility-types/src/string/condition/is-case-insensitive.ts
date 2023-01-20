import { IsExtension } from '../../any'

/**
 * If `Lowercase<A> extends Uppercase<A>` then `true` else `false`
 * @beta
 * @group Condition
 * @group String
 * @example
 * ```
 * type Ex1 = IsCaseInsensitive<'?'> // true
 * type Ex2 = IsCaseInsensitive<'a'> // false
 * type Ex3 = IsCaseInsensitive<'A'> // false
 * ```
 */
export type IsCaseInsensitive<A extends string> = IsExtension<
  Lowercase<A>,
  Uppercase<A>
>
