/**
 * A generic class constructior interface.
 * @example
 * ```
 * type Ex = AnyConstructor<[number, number]> // { new (a: number, b: number): void }
 * ```
 */
export interface AnyConstructor<A extends any[] = any[], B = any> {
  new (..._: A): B
}

export {}
