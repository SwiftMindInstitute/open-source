import { AnyTemplatable } from '../any'
import { IsEmpty } from '../any/antecedent/is-empty'
import { Options } from '../helpers/options'

/**
 * # 🚫 DO NOT EXPORT
 */
interface Opts<A extends AnyTemplatable = AnyTemplatable> extends Options {
  value: A
}

/**
 * Join a tuple of templatables `A` on a character templatable
 * @beta
 * @group String
 * @example
 * ```
 * type Ex = Join<['a', 'b', 'c'], ', '> // 'a, b, c'
 * ```
 */
export type Join<
  A extends AnyTemplatable[],
  B extends AnyTemplatable = '',
  Z extends Opts = Opts<''>
> = IsEmpty<A> extends true
  ? Z['value']
  : A extends [infer D, ...infer E]
  ? D extends AnyTemplatable
    ? E extends AnyTemplatable[]
      ? Z extends ''
        ? Join<E, B, Opts<D>>
        : Join<E, B, Opts<`${Z['value']}${B}${D}`>>
      : never
    : never
  : never
