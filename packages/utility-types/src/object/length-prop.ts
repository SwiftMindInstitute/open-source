import { Split } from '../string/split'
import { InferProperty } from './infer-property'
import { WithLengthProp } from './with-property/with-length-prop'

/**
 * Return the length of tuple `A`
 * @beta
 * @group Prop
 * @example
 * ```
 * type Ex1 = LengthProp<'Hello'>   // 5
 * type Ex2 = LengthProp<[1, 2, 3]> // 3
 * ```
 */
export type LengthProp<A extends WithLengthProp> = A extends string
  ? InferProperty<Split<A>, 'length'>
  : InferProperty<A, 'length'>
