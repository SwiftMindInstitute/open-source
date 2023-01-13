import { AnyKey } from './any-key'

/**
 * Generic object interface
 * @group Any
 * @example
 * ```
 * type Ex1 = AnyObject //
 * ```
 */
export type AnyObject<A extends AnyKey = AnyKey, B = any> = {
  [C in A]: B
}

export {}
