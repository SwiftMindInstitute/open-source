import { Or } from '@logic/condition/or'
import { IsZero } from './is-zero'

/**
 * If `A ≡ 0` and `B ≡ 0` then `true` else `false`
 * @internal
 */
export type SomeZero<A extends number, B extends number> = Or<
  IsZero<A>,
  IsZero<B>
>
