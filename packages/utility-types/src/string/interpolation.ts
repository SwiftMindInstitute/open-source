import { Match } from './match'
import { MatchGroup } from './utils'

/**
 * Evaluate the string template `A` interpolating variables of `A` with
 * values from `B`
 * @example
 * ```
 * type Ex = Interpolate<'Hello {{a}}', { a: 'World' }> // 'Hello World!'
 * ```
 */
export type Interpolation<
  A extends string,
  B extends Record<Match<A, C>, string>,
  C extends MatchGroup = MatchGroup<'{{', '}}'>,
  D extends string = A,
  F extends Match<A, C> = Match<A, C>
> = D extends `${infer G}${C['start']}${infer H}${C['end']}${infer I}`
  ? H extends F
    ? Interpolation<A, B, C, `${G}${B[H]}${I}`, F>
    : never
  : `${D}`

export {}
