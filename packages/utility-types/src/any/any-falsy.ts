import { NumberAdditiveIdentity } from '@identity/number-additive-identity'
import { StringIdentity } from '@identity/string-identity'

/**
 * All union of values that satisfy `<A>(a: A) => a == false`
 */
export type AnyFalsy =
  | false
  | StringIdentity
  | NumberAdditiveIdentity
  | null
  | undefined

export {}
