import {
  DeepObject,
  GetKeys,
  GetValue,
} from '@swiftmind/utility-types/dist/object'

const getDeepProp = <
  A extends DeepObject,
  B extends GetKeys<A, C>,
  C extends string = '.'
>(
  ref: A,
  key: B,
  connector: C = '.' as C
): GetValue<A, B, C> => {
  const subKeys = (key as string).split(connector)

  return subKeys.reduce((memo: any, subKey) => memo[subKey], ref)
}

export default getDeepProp
