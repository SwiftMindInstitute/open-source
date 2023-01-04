import { IsExtension } from '../../../any/relation/is-extension'

/**
 * If the string representation of `A` has a decimal then `true` else `false`
 * @example
 * ```
 * type Ex1 = IsDecimal<1.2> // true
 * type Ex2 = IsDecimal<3> // false
 * ```
 */
export type IsDecimal<A extends number> = IsExtension<
  `${A}`,
  `${number}.${number}`
>

export {}
