import { AnyObject } from '../../any/any-object'

/**
 * An object A that has a `length` property
 * @group Prop
 * @example
 * ```
 * type Ex = WithLengthProp<number> // { length: number }
 * ```
 */
export type WithLengthProp<A = any> = AnyObject<'length', A>

export {}
