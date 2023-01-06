/**
 * A generic class constructior interface.
 *
 * > Note for some reason constructors can't have `readonly any[]` for their
 * > rest parameters. The sole exception for functions. - hao
 *
 * @example
 * ```
 * type Ex1 = AnyConstructor // { new (..._: any[]): any }
 * type Ex2 = AnyConstructor<[number]> // { new (a: number): any }
 * type Ex3 = AnyConstructor<[number], { hello: 'world' }> //
 * ```
 */
export interface AnyConstructor<A extends any[] = any[], B = any> {
  new (..._: A): B
}

export {}
