import { AnyConstructor } from '@bluesky.llc/utility-types'

export type AnyMixin = <A extends AnyConstructor = AnyConstructor>(
  a: A
) => AnyConstructor & A

const mixin = <A extends AnyMixin>(callback: A) => callback

const Health = mixin(Base => {
  return class extends Base {
    _health = 0

    set health(value: number) {
      this._health = value
    }

    get health() {
      return this._health
    }
  }
})

export default Health
