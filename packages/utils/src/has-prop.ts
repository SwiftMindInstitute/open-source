import { AnyKey, AnyObject, HasProp } from '@bluesky.llc/utility-types'

const hasProp = <A extends AnyObject, B extends AnyKey>(
  ref: A,
  prop: B
): HasProp<A, B> => ref.hasOwnProperty(prop) as HasProp<A, B>

export default hasProp
