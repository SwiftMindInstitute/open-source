import { Split } from 'template/split'
import { InferProperty } from './infer-property'
import { WithLengthProp } from './with-prop/with-length-prop'

/**
 * Return the length of tuple `A`
 * @example
 * ```
 * type Ex1 = LengthProp<'Hello'> // 5
 * type Ex2 = LengthProp<[1, 2, 3]> // 3
 * ```
 */
export type LengthProp<A extends WithLengthProp> = A extends string
  ? InferProperty<Split<A>, 'length'>
  : InferProperty<A, 'length'>

export {}
