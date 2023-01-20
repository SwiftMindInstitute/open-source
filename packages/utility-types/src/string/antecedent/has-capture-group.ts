import { IsExtension } from '../../any/antecedent/is-extension'
import { CaptureGroup } from '../utils'

/**
 * Evaluate if `A` has a matches CaptureGroup `B`
 * @alpha
 * @group Antecedant
 * @group String
 * @example
 * ```
 * type Ex1 = HasCaptureGroup<'a {{b}} c'>                         // true
 * type Ex2 = HasCaptureGroup<'a b c'>                             // false
 * type Ex3 = HasCaptureGroup<'a ${b} c', CaptureGroup<'${', '}'>> // true
 * ```
 */
export type HasCaptureGroup<
  A extends string,
  B extends CaptureGroup = CaptureGroup<'{{', '}}'>
> = IsExtension<A, `${string}${B['start']}${string}${B['end']}${string}`>
