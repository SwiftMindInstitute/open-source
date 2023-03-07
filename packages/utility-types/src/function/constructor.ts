/**
 * A generic class constructior interface
 * @beta
 * @group Function
 * @example
 * ```
 * type Ex1 = AnyConstructor           // { new (..._: any[]): any }
 * type Ex2 = AnyConstructor<[number]> // { new (a: number): any }
 * ```
 */
export interface Constructor<A extends any[] = any[], B = any> {
  new (..._: A): B
}
