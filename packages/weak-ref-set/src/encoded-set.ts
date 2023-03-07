abstract class EncodedSet<Decoded, Encoded> {
  #instance: Set<Encoded> = new Set()

  abstract encode(a: Decoded): Encoded

  abstract decode(a: Encoded): Decoded | undefined

  clear() {
    this.#instance.clear()
  }

  has(value: Decoded) {
    for (const decodedValue of this.values()) {
      if (decodedValue === value) return true
    }

    return false
  }

  add(value: Decoded) {
    this.#instance.add(this.encode(value))

    return this
  }

  delete(value: Decoded) {
    for (const encodedValue of this.#instance.values()) {
      if (this.decode(encodedValue) === value) {
        this.#instance.delete(encodedValue)
        return true
      }
    }

    return false
  }

  *values() {
    for (const encodedValue of this.#instance.values()) {
      const decodedValue = this.decode(encodedValue)

      if (decodedValue === undefined) {
        this.#instance.delete(encodedValue)
      } else {
        yield decodedValue
      }
    }
  }

  keys() {
    return this.values()
  }

  *[Symbol.iterator]() {
    return this.values()
  }

  *entries() {
    for (const decodedValue of this.values()) {
      yield [decodedValue, decodedValue] as [Decoded, Decoded]
    }
  }

  forEach(
    callback: (..._: [Decoded, EncodedSet<Decoded, Encoded>, Set<any>]) => any
  ) {
    for (const ref of this.values()) {
      callback(ref, this, this.#instance)
    }
  }

  get size() {
    this.values()
    return this.#instance.size
  }

  get [Symbol.toStringTag]() {
    return 'EncodedSet'
  }
}

export default EncodedSet
