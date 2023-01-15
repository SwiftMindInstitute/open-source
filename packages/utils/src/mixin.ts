import { AnyMixin } from '@bluesky.llc/utility-types'

const mixin = <A extends AnyMixin>(callback: A) => callback

export default mixin
