import { Ands, AnyArray } from '@bluesky.llc/utility-types'

const and = <A extends AnyArray<boolean>>(...values: A): Ands<A> =>
  values.reduce((memo, value) => memo && value, true) as Ands<A>

export default and
