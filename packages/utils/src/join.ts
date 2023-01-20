import { AnyTemplatable, Join } from '@bluesky.llc/utility-types'

const join = <A extends AnyTemplatable[], B extends string = ''>(
  a: A,
  b: B = '' as B
): Join<A, B> => a.join(b) as Join<A, B>

export default join

export {}
