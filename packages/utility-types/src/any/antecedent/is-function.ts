import { AnyFunction } from '../any-function'
import { IsExtension } from './is-extension'

/**
 * If `A extends AnyFunction` then `true` else `false`
 * @beta
 * @group Antecedant
 * @group Any
 * @example
 * ```
 * type Ex1 = IsFunction<AnyFunction>                   // true
 * type Ex2 = IsFunction<(..._: AnyArray) => any>       // true
 * type Ex3 = IsFunction<{ (..._: AnyArray): any }>     // true
 * type Ex4 = IsFunction<AnyConstructor>                // false
 * type Ex5 = IsFunction<new (..._: AnyArray) => any>   // false
 * type Ex6 = IsFunction<{ new (..._: AnyArray): any }> // false
 * ```
 */
export type IsFunction<A> = IsExtension<A, AnyFunction>
