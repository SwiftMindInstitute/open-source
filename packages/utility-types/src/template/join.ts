import { IsEmpty } from '@tuple/condition/IsEmpty'

export type Join<
  A extends string[],
  B extends string = ''
> = IsEmpty<A> extends true
  ? B
  : A extends [infer C, ...infer D]
  ? C extends string // Why this is necessary...
    ? D extends string[] // ...I do not know. More 4.9.4 weirdness? - hao
      ? Join<D, `${B}${C}`>
      : never
    : never
  : B
