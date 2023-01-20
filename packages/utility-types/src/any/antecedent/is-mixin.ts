import { AnyMixin } from '../any-mixin'
import { IsExtension } from './is-extension'

/**
 * If `A extends AnyMixin` then `true` else `false`
 * @beta
 * @group Antecedant
 * @group Any
 * @example
 * ```
 * type Ex1 = IsMixin<AnyFunction<AnyArray, AnyConstructor>>             // true
 * type Ex2 = IsMixin<(..._: AnyArray) => new (..._: AnyArray) => any>   // true
 * type Ex3 = IsMixin<(..._: AnyArray) => { new (..._: AnyArray): any }> // true
 * type Ex4 = IsMixin<AnyConstructor>                                    // false
 * type Ex5 = IsMixin<new (..._: AnyArray) => any>                       // false
 * type Ex6 = IsMixin<{ new (..._: AnyArray): any }>                     // false
 * ```
 */
export type IsMixin<A> = IsExtension<A, AnyMixin>
