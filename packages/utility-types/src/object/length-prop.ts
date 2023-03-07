import { Split } from '../string/split'
import { InferProperty } from './infer-property'

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
export type LengthProp<A> = A extends string
  ? InferProperty<Split<A>, 'length'> // TODO(hao) see if this is still necessary in 5.0
  : InferProperty<A, 'length'>
