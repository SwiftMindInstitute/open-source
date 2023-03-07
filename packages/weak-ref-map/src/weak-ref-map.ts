import { AnyObject } from '@bluesky.llc/utility-types'

class WeakRefMap<Key extends AnyObject, Value extends AnyObject> {
  weakRefMap: WeakMap<Key, WeakRef<Value>>
  finalizationRegistry: FinalizationRegistry<Key>

  constructor(refs?: [AnyObject, AnyObject][]) {
    this.weakRefMap = refs
      ? new WeakMap(
          refs.map(([key, value]) =>
            value instanceof WeakRef ? [key, value] : [key, new WeakRef(value)]
          )
        )
      : new WeakMap()
    this.finalizationRegistry = new FinalizationRegistry(key =>
      this.weakRefMap.delete(key)
    )
  }

  set(key: Key, value: Value) {
    this.weakRefMap.set(key, new WeakRef(value))
    this.finalizationRegistry.register(value, key)

    return this
  }

  get(key: Key) {
    const ref = this.weakRefMap.get(key)

    if (!ref) return

    const value = ref.deref()

    if (value === undefined) this.weakRefMap.delete(key)

    return value
  }

  has(key: Key) {
    const ref = this.weakRefMap.get(key)

    if (!ref) return false

    const value = ref.deref()

    if (value === undefined) this.weakRefMap.delete(key)

    return value !== undefined
  }

  delete(key: Key) {
    return this.weakRefMap.delete(key)
  }

  get [Symbol.toStringTag]() {
    return 'WeakRefMap'
  }
}

export default WeakRefMap
