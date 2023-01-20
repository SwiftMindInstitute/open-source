import { IsEmptyArray } from '../../identity/antecedent/is-array-concat-identity'
import { IsZero } from '../../identity/antecedent/is-number-additive-identity'
import { IsEmptyObject } from '../../identity/antecedent/is-object-identity'
import { IsEmptyString } from '../../identity/antecedent/is-string-identity'
import { Ors } from '../../tuple/ors'

/**
 * If `A extends []` or `A extends ''` or `A extends {}` then `true` else `false`
 * @alpha
 * @group Antecedent
 * @group Any
 * @example
 * ```
 * type Ex1 = IsEmpty<0>           // true
 * type Ex2 = IsEmpty<''>          // true
 * type Ex3 = IsEmpty<{}>          // true
 * type Ex4 = IsEmpty<[]>          // true
 * type Ex5 = IsEmpty<1>           // false
 * type Ex6 = IsEmpty<'abc'>       // false
 * type Ex7 = IsEmpty<{ a: true }> // false
 * type Ex8 = IsEmpty<[true]>      // false
 * ```
 */
export type IsEmpty<A> = Ors<
  [IsZero<A>, IsEmptyString<A>, IsEmptyObject<A>, IsEmptyArray<A>]
>
