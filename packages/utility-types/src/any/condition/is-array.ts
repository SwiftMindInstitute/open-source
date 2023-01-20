import { AnyArray } from '../any-array'
import { IsExtension } from './is-extension'

/**
 * If `A extends AnyArray` then `true` else `false`
 * @beta
 * @group Condition
 * @group Any
 * @example
 * ```
 * type Ex1 = IsArray<[1, 2, 3]>              // true
 * type Ex2 = IsArray<string[]>               // true
 * type Ex3 = IsArray<Array<string | number>> // true
 * type Ex4 = IsArray<{ a: true }>            // false
 * ```
 */
export type IsArray<A> = IsExtension<A, AnyArray>
