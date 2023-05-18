import { AnyKey } from '@swiftmind/utility-types'

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
