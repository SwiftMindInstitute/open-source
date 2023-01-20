import { AnyObject } from '../any-object'
import { IsExtension } from './is-extension'

/**
 * If `A extends AnyObject` then `true` else `false`
 * @beta
 * @group Antecedent
 * @group Any
 * @example
 * ```
 * type Ex1 = IsObject<{ a: true }>            // true
 * type Ex2 = IsObject<[1, 2, 3]>              // true
 * type Ex3 = IsObject<string[]>               // true
 * type Ex4 = IsObject<Array<string | number>> // true
 * type Ex5 = IsObject<boolean>                // false
 * ```
 */
export type IsObject<A> = IsExtension<A, AnyObject>
