import { IsEmpty } from '@tuple/condition/IsEmpty'
import { Opts } from 'helpers/opts'

/**
 * Recursive options for Join
 * @internal
 */
type JoinOpts<A extends string = string> = Opts<'Join', { value: A }>

/**
 * Join a tuple of strings A on a character B.
 * @example
 * ```
 * type Ex = Join<['a', 'b', 'c'], ', '> // 'a, b, c'
 * ```
 */
export type Join<
  A extends string[],
  B extends string = '',
  O extends JoinOpts = JoinOpts<''>
> = IsEmpty<A> extends true
  ? O['value']
  : A extends [infer D, ...infer E]
  ? D extends string
    ? E extends string[]
      ? O['value'] extends ''
        ? Join<E, B, JoinOpts<D>>
        : Join<E, B, JoinOpts<`${O['value']}${B}${D}`>>
      : never
    : never
  : never
