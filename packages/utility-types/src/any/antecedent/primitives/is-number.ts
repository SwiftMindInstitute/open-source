import { IsExtension } from '../is-extension'

/**
 * If `A extends number` then `true` else `false`
 * @beta
 * @group Antecedent
 * @group Any
 * @example
 * ```
 * type Ex = IsNumber<true | false> // true
 * type Ex = IsNumber<string | number> // false
 * ```
 */
export type IsNumber<A> = IsExtension<A, number>
