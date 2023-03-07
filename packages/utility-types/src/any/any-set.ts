/**
 * Generic Set interface
 * @alpha
 * @example
 * ```
 * type Ex1 = AnySet // Set<any>
 * type Ex2 = AnySet<number> // Set<number>
 * ```
 */
export interface AnySet<A = any> extends Set<A> {}
