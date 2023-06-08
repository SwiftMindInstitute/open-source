import { AnyPrimitive } from '@swiftmind/utility-types'

type ValidateIsDefined<A extends AnyPrimitive> = A extends undefined
  ? false
  : true

const validateIsDefined = <A extends AnyPrimitive>(
  value: A
): ValidateIsDefined<A> => (value !== undefined) as ValidateIsDefined<A>

export default validateIsDefined
