import { BigintAdditiveIdentity } from '../identity/bigint-additive-identity'
import { NumberAdditiveIdentity } from '../identity/number-additive-identity'
import { StringConcatIdentity } from '../identity/string-concat-identity'

/**
 * All union of values that satisfy `<A>(a: A) => a == false`
 * @beta
 * @group Any
 * @example
 * ```
 * type Ex = AnyFalsy // false | '' | 0 | 0n | null | undefined
 * ```
 */
export type AnyFalsy =
  | false
  | StringConcatIdentity
  | NumberAdditiveIdentity
  | BigintAdditiveIdentity
  | null
  | undefined
