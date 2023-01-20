import { AnyKey } from './any-key'

/**
 * Generic object interface
 * @beta
 * @group Any
 * @example
 * ```
 * type Ex1 = AnyObject                     // { [_ in string | number | symbol]: any }
 * type Ex2 = AnyObject<'hello'>            // { hello: any }
 * type Ex2 = AnyObject<'a' | 'b', boolean> // { a: boolean, b: boolean }
 * ```
 */
export type AnyObject<A extends AnyKey = AnyKey, B = any> = {
  [C in A]: B
}
