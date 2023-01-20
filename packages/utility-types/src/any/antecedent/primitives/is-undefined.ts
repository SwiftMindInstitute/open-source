import { IsExtension } from '../is-extension'

/**
 * If `A extends undefined` then `true` else `false`
 * @beta
 * @group Antecedent
 * @group Any
 * @example
 * ```
 * type Ex1 = IsUndefined<symbol> // true
 * type Ex2 = IsUndefined<string> // false
 * ```
 */
export type IsUndefined<A> = IsExtension<A, undefined>
