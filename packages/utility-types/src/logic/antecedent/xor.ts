import { PureAntecedent } from '../../helpers'
import { Not } from './not'

/**
 * Evaluate `A ⊻ B`
 * @beta
 * @group Antecedant
 * @group Logic
 * @example
 * ```
 * type Ex1 = Xor<true, true>   // false
 * type Ex2 = Xor<true, false>  // true
 * type Ex3 = Xor<false, true>  // true
 * type Ex4 = Xor<false, false> // false
 * ```
 */
export type Xor<A extends boolean, B extends boolean> = PureAntecedent<
  A,
  Not<B>,
  B
>
