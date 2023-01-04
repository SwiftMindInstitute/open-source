import { And } from '../../logic'
import { IsExtension } from './is-extension'

/**
 * If `A extends B` and `B extends A` then `true` else `false`
 * @example
 * ```
 * type Ex1 =
 * ```
 */
export type IsEqual<A, B> = And<IsExtension<A, B>, IsExtension<B, A>>
