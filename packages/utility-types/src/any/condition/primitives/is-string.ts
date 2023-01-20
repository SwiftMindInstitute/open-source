import { IsExtension } from '../is-extension'

/**
 * If `A extends number` then `true` else `false`
 * @beta
 * @group Condition
 * @group Any
 * @example
 * ```
 * type Ex1 = IsNumber<true | false>    // true
 * type Ex2 = IsNumber<string | number> // false
 * ```
 */
export type IsString<A> = IsExtension<A, string>
