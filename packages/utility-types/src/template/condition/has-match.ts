import { MatchGroup } from 'template/utils'

export type HasMatch<
  A extends string,
  B extends MatchGroup = MatchGroup<'${', '}'>
> = A extends `${infer _C}${B['start']}${infer _D}${B['end']}${infer _E}`
  ? true
  : false

export {}
