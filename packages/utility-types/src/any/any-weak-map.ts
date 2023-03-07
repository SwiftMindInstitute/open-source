/**
 * Generic WeakMap interface
 * @alpha
 * @example
 * ```
 * type Ex1 = AnyWeakMap                 // WeakMap<object, any>
 * type Ex2 = AnyWeakMap<MyType>         // WeakMap<MyType, any>
 * type Ex3 = AnyWeakMap<MyType, string> // WeakMap<MyType, string>
 * ```
 */
export interface AnyWeakMap<A extends object = object, B = any>
  extends WeakMap<A, B> {}
