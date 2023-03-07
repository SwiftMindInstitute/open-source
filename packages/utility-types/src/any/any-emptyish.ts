import { EmptyArray, EmptyObject, EmptyString } from '../identity'
import { Zero } from '../identity/number-additive-identity'

/**
 * A union of values that could be considered empty
 * @alpha
 * @group Any
 * @example
 * ```
 * type Ex = Emptyish // 0 | '' | [] | {}
 * ```
 */
export type Emptyish = Zero | EmptyString | EmptyObject | EmptyArray
