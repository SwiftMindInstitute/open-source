import { IsExtension } from '../../any/condition/is-extension'

/**
 * If the string representation of `A` has a decimal then `true` else `false`
 * @group Condition
 * @group Math
 * @example
 * ```
 * type Ex1 = IsDecimal<1.2> // true
 * type Ex2 = IsDecimal<3>   // false
 * ```
 */
export type IsDecimal<A extends number> = IsExtension<
  `${A}`,
  `${number}.${number}`
>

export {}
