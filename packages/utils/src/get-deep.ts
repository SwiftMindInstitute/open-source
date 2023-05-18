import { AnyKey, AnyObject, Join } from '@swiftmind/utility-types'

type TemplateKeys<
  A extends AnyObject,
  B extends string | undefined = undefined
> = A extends object
  ? {
      [C in keyof A]: A[C] extends object
        ? C extends string
          ? TemplateKeys<A[C], Join<B, C, '.'>>
          : never
        : C extends string
        ? Join<B, C, '.'>
        : never
    }[keyof A]
  : never

type NestedValue<
  A extends AnyObject,
  B extends TemplateKeys<A>
> = B extends `${infer D}.${infer E}`
  ? A[D] extends AnyObject
    ? E extends TemplateKeys<A[D]>
      ? NestedValue<A[D], E>
      : never
    : never
  : A[B]

const cx =
  <A extends AnyObject>(templates: A) =>
  <B extends TemplateKeys<A>>(key: B): NestedValue<A, B> => {
    const subKeys = key.split('.')

    return subKeys.reduce(
      (memo: AnyObject, subKey: AnyKey) => memo[subKey] as any,
      templates
    ) as NestedValue<A, B>
  }

export default cx
