import EncodedSet from './encoded-set'

class WeakRefSet<Obj extends object> extends EncodedSet<Obj, WeakRef<Obj>> {
  #decodedToEncoded = new WeakMap()

  constructor(refs?: Obj[]) {
    super()
    refs?.forEach(ref => this.add(ref))
  }

  encode(value: Obj) {
    if (this.#decodedToEncoded.has(value)) {
      return this.#decodedToEncoded.get(value)
    } else {
      const encodedValue = new WeakRef(value)
      this.#decodedToEncoded.set(value, encodedValue)
      return encodedValue
    }
  }

  decode(ref: WeakRef<Obj>) {
    return ref.deref()
  }
}

export default WeakRefSet
