import { AnyKey } from '../static/any-key'

/**
 * Generic object interface
 * @example
 * ```
 * type Ex1 = AnyObject //
 * ```
 */
export type AnyObject<A extends AnyKey = AnyKey, B extends any = any> = {
  [C in A]: B
}

export {}
