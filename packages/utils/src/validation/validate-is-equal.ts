import { AnyPrimitive, IsEqual } from '@swiftmind/utility-types'

const validateIsEqual = <A extends AnyPrimitive, B extends AnyPrimitive>(
  a: A,
  b: B
): IsEqual<A, B> => ((a as any) === (b as any)) as IsEqual<A, B>

export default validateIsEqual
