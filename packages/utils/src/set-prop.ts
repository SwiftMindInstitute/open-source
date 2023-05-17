import { AnyKey, AnyObject } from '@swiftmind/utility-types'

const setProp = <A extends AnyObject, B extends AnyKey, C>(
  ref: A,
  key: B,
  value: C
): A & { [D in B]: C } => {
  ref[key] = value as A[B]

  return ref
}

export default setProp
