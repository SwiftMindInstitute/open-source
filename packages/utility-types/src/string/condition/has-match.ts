import { CaptureGroup } from 'string/utils'

/**
 * Evaluate if `A` has a match mathing MatchGroup `B`
 * @group Condition
 * @group String
 * @example
 * ```
 * type Ex = HasMatch<'a {{b}} c'> // true
 * ```
 */
export type HasMatch<
  A extends string,
  B extends CaptureGroup = CaptureGroup<'{{', '}}'>
> = A extends `${infer _C}${B['start']}${infer _D}${B['end']}${infer _E}`
  ? true
  : false

export {}
