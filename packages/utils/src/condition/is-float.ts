import { IsFloat } from '@bluesky.llc/utility-types'

const isFloat = <A extends number>(a: A): IsFloat<A> => {
  return (a === (a | 0)) as IsFloat<A>
}

export default isFloat
