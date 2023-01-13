import { IsExtension } from '@any/condition/is-extension'

/**
 * If `A < 0` then `true` else `false`
 * @group Condition
 * @group Math
 * @example
 * ```
 * type Ex1 = IsNegative<-1> // true
 * type Ex2 = IsNegative<0> // false
 * type Ex3 = IsNegative<1> // false
 * ```
 */
export type IsNegative<A extends number> = IsExtension<`${A}`, `-${number}`>

export {}
