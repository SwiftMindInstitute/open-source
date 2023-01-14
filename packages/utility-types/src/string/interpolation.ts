import { Capture } from './capture'
import { CaptureGroup } from './utils'

/**
 * Evaluate the string template `A` interpolating variables of `A` with
 * values from `B`
 * @experimental
 * @group String
 * @example
 * ```
 * type Ex = Interpolate<'Hello {{a}}', { a: 'World' }> // 'Hello World!'
 * ```
 */
export type Interpolation<
  A extends string,
  B extends Record<Capture<A, C>, string>,
  C extends CaptureGroup = CaptureGroup<'{{', '}}'>,
  D extends string = A,
  F extends Capture<A, C> = Capture<A, C>
> = D extends `${infer G}${C['start']}${infer H}${C['end']}${infer I}`
  ? H extends F
    ? Interpolation<A, B, C, `${G}${B[H]}${I}`, F>
    : never
  : `${D}`

export {}
