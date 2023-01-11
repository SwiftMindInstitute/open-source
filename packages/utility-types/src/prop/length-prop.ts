import { InferProperty } from './infer-property'
import { WithLengthProp } from './with-prop/with-length-prop'

/**
 * Return the length of tuple `A`
 * @example
 * ```
 * type Ex = Length<['a', 'b', 'c']> // 3
 * ```
 */
export type LengthProp<A extends WithLengthProp> = InferProperty<A, 'length'>

export {}
