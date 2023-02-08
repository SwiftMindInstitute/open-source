import { AnyStringish } from '../any'
import { IsEmpty } from '../any/antecedent/is-empty'
import { Internal } from '../helpers/internal'

/**
 * # 🚫 DO NOT EXPORT
 */
interface Opts<A extends AnyStringish = AnyStringish> extends Internal {
  value: A
}

/**
 * Join a tuple of templatables `A` on a templatable `B`
 * @beta
 * @group String
 * @example
 * ```
 * type Ex = Join<['a', 'b', 'c'], ', '> // 'a, b, c'
 * ```
 */
export type Join<
  A extends AnyStringish[],
  B extends AnyStringish = '',
  Z extends Opts = Opts<''>
> = IsEmpty<A> extends true
  ? Z['value']
  : A extends [infer D, ...infer E]
  ? D extends AnyStringish
    ? E extends AnyStringish[]
      ? Z extends ''
        ? Join<E, B, Opts<D>>
        : Join<E, B, Opts<`${Z['value']}${B}${D}`>>
      : never
    : never
  : never
