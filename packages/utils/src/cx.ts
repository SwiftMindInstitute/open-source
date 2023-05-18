import { Join } from '@swiftmind/utility-types'

interface Templates {
  [_: string]: string | Templates
}

type TemplateKeys<
  A extends Templates,
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
  A extends Templates,
  B extends TemplateKeys<A>
> = B extends `${infer D}.${infer E}`
  ? A[D] extends Templates
    ? E extends TemplateKeys<A[D]>
      ? NestedValue<A[D], E>
      : never
    : never
  : A[B]

const cx =
  <A extends Templates>(templates: A) =>
  <B extends TemplateKeys<A>>(key: B): NestedValue<A, B> => {
    const subKeys = key.split('.')

    return subKeys.reduce(
      (memo, subKey) => memo[subKey] as any,
      templates
    ) as NestedValue<A, B>
  }

export default cx
