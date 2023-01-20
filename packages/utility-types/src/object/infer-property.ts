import { KeyOf } from './key-of'

/**
 * Infer the type of property `A[B]`.
 * @beta
 * @group Prop
 * @example
 * ```
 * type Ex = InferProperty<{ test: 'blah' }, 'test'> // blah
 * ```
 */
export type InferProperty<A, B extends KeyOf<A>> = A extends {
  [C in B]: infer D
}
  ? D
  : never
