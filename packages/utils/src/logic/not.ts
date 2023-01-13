import { Not } from '@bluesky.llc/utility-types'

const not = <A extends boolean>(a: A): Not<A> => !a as Not<A>

export default not
