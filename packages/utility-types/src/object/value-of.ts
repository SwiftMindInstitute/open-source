import { KeyOf } from './key-of'

/**
 * Return the union of all values in `A`
 * @group Object
 * @example
 * ```
 * type Ex = ValueOf<{ a: string, b: number }> // string | number
 * ```
 */
export type ValueOf<A extends object> = A[KeyOf<A>]
