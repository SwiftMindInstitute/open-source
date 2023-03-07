import { Intersection } from './intersection'
import { Union } from './union'

/**
 * Alias of `Exclude<A | B, A & B>`
 *
 * The
 * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
 * `A △ B` of `A` and `B`
 * @experimental
 */
export type Difference<A, B> = Exclude<Union<A, B>, Intersection<A, B>>
