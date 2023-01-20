import { AnyObject } from '../../any/any-object'

/**
 * An object A that has a `length` property
 * @beta
 * @group Prop
 * @example
 * ```
 * type Ex = WithLengthProp<number> // { length: number }
 * ```
 */
export type WithLengthProp = AnyObject<'length'>
