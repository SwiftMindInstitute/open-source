import { AnyMap } from '../any/any-map'
import { AnyWeakMap } from '../any/any-weak-map'

/**
 * Alias of `keyof A` to maintain parity with `ValueOf`
 *
 * For arrays use `IndexOf`
 *
 * @beta
 * @group Object
 * @example
 * ```
 * export type Ex1 = KeyOf<{ a: string; b: number }> // 'a' | 'b'
 * export type Ex2 = KeyOf<Map<0 | 1, number>> // 0 | 1
 * export type Ex3 = KeyOf<WeakMap<{ a: 1 }, number>> // { a: 1 }
 * ```
 */
export type KeyOf<A> = A extends AnyMap<infer B>
  ? B
  : A extends AnyWeakMap<infer C>
  ? C
  : keyof A
