import { AnyKey } from 'any/any-key'
import { AnyPrimitive } from 'any/any-primitive'
import { Join } from 'string/join'

export interface DeepObject {
  [_: AnyKey]: DeepObject | AnyPrimitive
}

/**
 * Recurse over object `A` returning strings representing every path.
 * @beta
 * @group Object
 * @example
 * ```
 * type Ex1 = GetKeys<{ a: { b: 'c' }, d: 'e' }>      // 'a.b' | d
 * type Ex2 = GetKeys<{ a: { b: 'c' }, d: 'e' }, ':'> // 'a:b' | d
 * ```
 */
export type GetKeys<
  A extends DeepObject,
  B extends string = '.',
  C extends string | undefined = undefined
> = A extends object
  ? {
      [D in keyof A]: A[D] extends object
        ? D extends string
          ? GetKeys<A[D], B, Join<C, D, B>>
          : never
        : D extends string
        ? Join<C, D, B>
        : never
    }[keyof A]
  : never
