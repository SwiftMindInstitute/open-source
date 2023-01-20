import { IsZero } from '../identity/antecedent/is-number-additive-identity'
import { Add } from '../math/add'
import { Decrement } from '../math/decrement'

/**
 * Repeated addition utility function used in multiplication
 * @internal
 */
export type MultiAdd<
  A extends number,
  B extends number,
  C extends number = 0
> = IsZero<B> extends true ? C : MultiAdd<A, Decrement<B>, Add<A, C>>
