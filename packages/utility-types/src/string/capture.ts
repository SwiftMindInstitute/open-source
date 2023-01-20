import { Options } from 'prettier'
import { CaptureGroup } from './utils'

/**
 * # 🚫 DO NOT EXPORT
 */
interface Opts<A extends string = string> extends Options {
  value: A
}

/**
 * Evaluate the union of the strings in `A` matching capture group `B`
 * @alpha
 * @group String
 * @example
 * ```
 * type Ex = Capture<'{{a}} b {{c}}', { start: '{{', end: '}}' }> // 'a' | 'c'
 * ```
 */
export type Capture<
  A extends string,
  B extends CaptureGroup = CaptureGroup<'{{', '}}'>,
  Z extends Opts = Opts<never>
> = A extends `${string}${B['start']}${infer C}${B['end']}${infer D}`
  ? Capture<D, B, Opts<Z['value'] | C>>
  : Z['value']
