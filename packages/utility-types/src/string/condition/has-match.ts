import { MatchGroup } from 'string/utils'

/**
 * Evaluate if `A` has a match mathing MatchGroup `B`
 * @example
 * ```
 * type Ex = HasMatch<'a {{b}} c'> // true
 * ```
 */
export type HasMatch<
  A extends string,
  B extends MatchGroup = MatchGroup<'{{', '}}'>
> = A extends `${infer _C}${B['start']}${infer _D}${B['end']}${infer _E}`
  ? true
  : false

export {}
