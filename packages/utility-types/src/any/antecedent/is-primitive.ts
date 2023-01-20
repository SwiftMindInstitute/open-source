import { AnyPrimitive } from '../any-primitive'
import { IsExtension } from './is-extension'

/**
 * If `A extends AnyPrimitive` then `true` else `false`
 * @beta
 * @group Antecedant
 * @group Any
 * @example
 * ```
 * type Ex1 = IsPrimitive<string>    // true
 * type Ex2 = IsPrimitive<number>    // true
 * type Ex3 = IsPrimitive<bigint>    // true
 * type Ex4 = IsPrimitive<boolean>   // true
 * type Ex5 = IsPrimitive<symbol>    // true
 * type Ex6 = IsPrimitive<null>      // true
 * type Ex7 = IsPrimitive<undefined> // true
 * type Ex8 = IsPrimitive<[]>        // false
 * ```
 */
export type IsPrimitive<A> = IsExtension<A, AnyPrimitive>
