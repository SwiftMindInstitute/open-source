import { AnyObject } from './any-object'

/**
 * Generic WeakSet interface
 * @alpha
 * @example
 * ```
 * type Ex1 = AnyWeakSet // WeakSet<any>
 * type Ex2 = AnyWeakSet<number> // WeakSet<number>
 * ```
 */
export interface AnyWeakSet<A extends AnyObject = AnyObject>
  extends WeakSet<A> {}
