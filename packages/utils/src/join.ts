import { AnyStringish, Join } from '@bluesky.llc/utility-types'

const join = <A extends AnyStringish[], B extends string = ''>(
  a: A,
  b: B = '' as B
): Join<A, B> => a.join(b) as Join<A, B>

export default join

export {}
