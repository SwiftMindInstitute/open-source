import { IsExtension } from '../../any/antecedent/is-extension'

/**
 * If the string representation of `A` has a decimal then `true` else `false`
 * @beta
 * @group Antecedant
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
