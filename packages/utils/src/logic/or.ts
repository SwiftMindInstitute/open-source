import { AnyArray, Ors } from '@bluesky.llc/utility-types'

const or = <A extends AnyArray<boolean>>(...values: A): Ors<A> =>
  values.reduce((memo, value) => memo || value, false) as Ors<A>

export default or
