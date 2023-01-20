import { CaptureGroup } from './utils'

/**
 * Evaluate the union of the strings in A matching capture group B
 * @alpha
 * @group String
 * @example
 * ```
 * type Ex = Capture<'{{a}} b {{c}}', { start: '{{', end: '}}' }> // 'a' | 'b'
 * ```
 */
export type Capture<
  A extends string,
  B extends CaptureGroup = CaptureGroup<'{{', '}}'>,
  C extends string = never
> = A extends `${infer _}${B['start']}${infer E}${B['end']}${infer F}`
  ? Capture<F, B, C | E>
  : C
