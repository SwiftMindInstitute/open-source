/**
 * Join a tuple of templatables `A` on a templatable `B`
 * @beta
 * @group String
 * @example
 * ```
 * type Ex1 = Join<'a', 'b', '.', ', '>  // 'a.b'
 * type Ex2 = Join<'a', null, '.', ', '> // 'a'
 * type Ex1 = Join<null, 'b', '.', ', '> // 'b'
 * ```
 */
export type Join<
  A extends any,
  B extends any,
  C extends string | number
> = A extends string
  ? B extends string
    ? `${A}${C}${B}`
    : A
  : B extends string
  ? B
  : ''
