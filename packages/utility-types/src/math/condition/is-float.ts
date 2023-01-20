import { IsExtension } from '../../any/condition/is-extension'

/**
 * If the string representation of `A` has a decimal then `true` else `false`
 * @beta
 * @group Condition
 * @group Math
 * @example
 * ```
 * type Ex1 = IsFloat<1.2> // true
 * type Ex2 = IsFloat<3>   // false
 * ```
 */
export type IsFloat<A extends number> = IsExtension<
  `${A}`,
  `${number}.${number}`
>
