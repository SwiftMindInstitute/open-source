import { AnyObject } from '@any/any-object'

/**
 * Infer the type of property `A[B]`.
 * @example
 * ```
 * type Ex = InferProperty<{ test: 'blah' }, 'test'> // blah
 * ```
 */
export type InferProperty<A extends AnyObject, B extends keyof A> = A extends {
  [C in B]: infer D
}
  ? D
  : never

export {}
