import { DeepObject, GetKeys } from './get-keys'

/**
 * Get the type of prop corresponding to `B` from `A`
 * @beta
 * @group Object
 * @example
 * ```
 * type Ex1 = GetValue<{ a: { b: 'c' } }, 'a.b'>      // 'c'
 * type Ex2 = GetValue<{ a: { b: 'c' } }, 'a:b', ':'> // 'c'
 * ```
 */
export type GetValue<
  A extends DeepObject,
  B extends GetKeys<A, C>,
  C extends string = '.'
> = B extends `${infer D}${C}${infer E}`
  ? A[D] extends DeepObject
    ? E extends GetKeys<A[D], C>
      ? GetValue<A[D], E, C>
      : never
    : never
  : A[B]
