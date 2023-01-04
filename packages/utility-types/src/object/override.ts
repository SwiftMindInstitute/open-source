import { KeyOf } from './key-of'

/**
 * Return the intersection of `A` and `B` for any conflicts defer to `B`.
 * @example
 * ```
 * type Ex = Override<{ a: number, b: number }, { a: string }>['a'] // string
 * ```
 */
export type Override<A extends object, B extends object> = Omit<A, KeyOf<B>> & B
