import { AnyArray, AnyFunction } from '../any'

/**
 * A generic endofunction interface
 * @alpha
 * @group Function
 * @example
 * ```
 * type Ex1 = EndoFunction         // (..._: A[]) => A
 * type Ex2 = EndoFunction<string> // (..._: string[]) => string
 * ```
 */
export interface EndoFunction<A> extends AnyFunction<AnyArray<A>, A> {}
