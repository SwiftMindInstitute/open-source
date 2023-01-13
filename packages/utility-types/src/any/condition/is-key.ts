import { AnyKey } from '../any-key'
import { IsExtension } from './is-extension'

/**
 * If `A extends AnyKey` then `true` else `false`
 * @group Condition
 * @group Any
 * @example
 * ```
 * type Ex1 = IsKey<symbol>  // true
 * type Ex2 = IsKey<string>  // true
 * type Ex3 = IsKey<number>  // true
 * type Ex4 = IsKey<boolean> // false
 * ```
 */
export type IsKey<A> = IsExtension<A, AnyKey>

export {}
