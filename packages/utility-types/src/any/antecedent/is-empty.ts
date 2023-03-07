import { Emptyish } from '../any-emptyish'
import { IsExtension } from './is-extension'

/**
 * If `A extends []` or `A extends ''` or `A extends {}` then `true` else `false`
 * @alpha
 * @group Antecedent
 * @group Any
 * @example
 * ```
 * type Ex1 = IsEmpty<0>           // true
 * type Ex2 = IsEmpty<''>          // true
 * type Ex3 = IsEmpty<{}>          // true
 * type Ex4 = IsEmpty<[]>          // true
 * type Ex5 = IsEmpty<1>           // false
 * type Ex6 = IsEmpty<'abc'>       // false
 * type Ex7 = IsEmpty<{ a: true }> // false
 * type Ex8 = IsEmpty<[true]>      // false
 * ```
 */
export type IsEmpty<A> = IsExtension<A, Emptyish>
