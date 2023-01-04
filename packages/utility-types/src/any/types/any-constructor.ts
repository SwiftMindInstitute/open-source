import { AnyArray } from './any-array'

/**
 * A generic class constructior interface.
 * @example
 * ```
 * type Ex = AnyConstructor<[number, number]> // { new (a: number, b: number): void }
 * ```
 */
export interface AnyConstructor<A extends AnyArray = AnyArray> {
  new (..._: A): void
}

export {}
