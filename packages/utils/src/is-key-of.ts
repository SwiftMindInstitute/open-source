import { AnyKey, AnyObject, IsKeyOf } from '@bluesky.llc/utility-types'

const isKeyOf = <A extends AnyObject, B extends AnyKey>(
  ref: A,
  prop: B
): IsKeyOf<A, B> => ref.hasOwnProperty(prop) as IsKeyOf<A, B>

export default isKeyOf
