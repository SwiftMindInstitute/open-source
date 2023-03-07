import { IsExtension } from '../../any/antecedent/is-extension'
import { Constructor } from '../constructor'

/**
 * If `A extends AnyConstructor` then `true` else `false`
 * @beta
 * @group Antecedent
 * @group Function
 * @example
 * ```
 * type Ex1 = IsConstructor<AnyConstructor>                // true
 * type Ex2 = IsConstructor<new (..._: AnyArray) => any>   // true
 * type Ex3 = IsConstructor<{ new (..._: AnyArray): any }> // true
 * type Ex4 = IsConstructor<AnyFunction>                   // false
 * type Ex5 = IsConstructor<(..._: AnyArray) => any>       // false
 * type Ex6 = IsConstructor<{ (..._: AnyArray): any }>     // false
 * ```
 */
export type IsConstructor<A> = IsExtension<A, Constructor>
