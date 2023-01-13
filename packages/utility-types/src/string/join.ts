import { IsEmpty } from '../any/condition/is-empty'

/**
 * Join a tuple of strings A on a character B.
 * @group String
 * @example
 * ```
 * type Ex = Join<['a', 'b', 'c'], ', '> // 'a, b, c'
 * ```
 */
export type Join<
  A extends string[],
  B extends string = '',
  Z extends string = ''
> = IsEmpty<A> extends true
  ? Z
  : A extends [infer D, ...infer E]
  ? D extends string
    ? E extends string[]
      ? Z extends ''
        ? Join<E, B, D>
        : Join<E, B, `${Z}${B}${D}`>
      : never
    : never
  : never

export {}
