import { CaptureGroup } from '../utils'

/**
 * Evaluate if `A` has a matches CaptureGroup `B`
 * @experimental
 * @group Condition
 * @group String
 * @example
 * ```
 * type Ex = HasCaptureGroup<'a {{b}} c'> // true
 * ```
 */
export type HasCaptureGroup<
  A extends string,
  B extends CaptureGroup = CaptureGroup<'{{', '}}'>
> = A extends `${infer _C}${B['start']}${infer _D}${B['end']}${infer _E}`
  ? true
  : false

export {}
