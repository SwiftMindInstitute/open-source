import { IsFloat } from '@swiftmind/utility-types'

/**
 * Return if the string representation a JavaScript number looks like a float
 * @experimental
 * @param value A number
 * @returns A boolean indicating if it looks like a float
 */
const validateIsFloat = <A extends number>(value: A): IsFloat<A> => {
  return (value !== (value | 0)) as IsFloat<A>
}

export default validateIsFloat
