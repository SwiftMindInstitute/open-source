import { Opts } from 'helpers'
import { MatchGroup } from './utils'

type MatchOpts<A extends string = string> = Opts<'Match', { value: A }>

export type Match<
  A extends string,
  B extends MatchGroup = MatchGroup<'${', '}'>,
  O extends MatchOpts = MatchOpts<never>
> = A extends `${infer _}${B['start']}${infer E}${B['end']}${infer F}`
  ? Match<F, B, MatchOpts<O['value'] | E>>
  : O['value']

export {}
