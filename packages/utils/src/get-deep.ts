import { AnyKey, AnyPrimitive, Join } from '@swiftmind/utility-types'

interface DeepObject {
  [_: AnyKey]: DeepObject | AnyPrimitive
}

type TemplateKeys<
  A extends DeepObject,
  B extends string,
  C extends string | undefined = undefined
> = A extends object
  ? {
      [D in keyof A]: A[D] extends object
        ? D extends string
          ? TemplateKeys<A[D], B, Join<C, D, B>>
          : never
        : D extends string
        ? Join<C, D, B>
        : never
    }[keyof A]
  : never

type NestedValue<
  A extends DeepObject,
  B extends TemplateKeys<A, C>,
  C extends string
> = B extends `${infer D}${C}${infer E}`
  ? A[D] extends DeepObject
    ? E extends TemplateKeys<A[D], C>
      ? NestedValue<A[D], E, C>
      : never
    : never
  : A[B]

interface GetDeep {
  <A extends DeepObject, B extends TemplateKeys<A, C>, C extends string = '.'>(
    a: A,
    b: B,
    c: C
  ): NestedValue<A, B, C>
}

const getDeep: GetDeep = (ref, key, connector) => {
  const subKeys = key.split(connector)

  return subKeys.reduce(
    (memo: DeepObject, subKey: AnyKey) => memo[subKey] as any,
    ref
  ) as NestedValue<typeof ref, typeof key, typeof connector>
}

export default getDeep
