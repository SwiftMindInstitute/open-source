import { Match } from './match'

export type Interpolation<
  A extends string,
  B extends Record<Match<A>, string>,
  C extends string = A,
  D extends string = '',
  E extends Match<A> = Match<A>
> = C extends `${infer F}\${${infer G}}${infer H}`
  ? G extends Match<A>
    ? Interpolation<A, B, H, `${D}${F}${B[G]}`, E>
    : never
  : `${D}${C}`

export {}
