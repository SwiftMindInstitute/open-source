import { AnyArray } from '../../../any'

/**
 * Append `B` onto tuple `A`
 * @example
 * ```
 * type Ex = Append<['a', 'b'], 'c'> // ['a', 'b', 'c']
 * ```
 */
export type Append<A extends AnyArray, B extends any> = [...A, B]

export {}
