import { IsExtension } from '../is-extension'

/**
 * If `A extends symbol` then `true` else `false`
 * @beta
 * @group Antecedant
 * @group Any
 * @example
 * ```
 * type Ex1 = IsSymbol<symbol> // true
 * type Ex2 = IsSymbol<string> // false
 * ```
 */
export type IsSymbol<A> = IsExtension<A, symbol>
