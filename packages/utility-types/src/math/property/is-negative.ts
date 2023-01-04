import { IsExtension } from '../../any/relation/is-extension'

/**
 * If `A < 0` then `true` else `false`
 * @example
 * ```
 * type Ex1 = IsNegative<-1> // true
 * type Ex2 = IsNegative<0> // false
 * type Ex3 = IsNegative<1> // false
 * ```
 */
export type IsNegative<A extends number> = IsExtension<`${A}`, `-${number}`>

export {}
