abstract class CodedMap<
  DecodedKey = any,
  EncodedKey = DecodedKey,
  DecodedValue = any,
  EncodedValue = DecodedValue
> {
  #instance: Map<EncodedKey, EncodedValue>

  abstract encodeKey(a: DecodedKey): EncodedKey

  abstract decodeKey(a: EncodedKey): DecodedKey

  abstract encodeValue(a: DecodedValue): EncodedValue

  abstract decodeValue(a: EncodedValue): DecodedValue

  clear() {
    this.#instance.clear()
  }

  constructor(entries: [DecodedKey, DecodedValue][] = []) {
    this.#instance = new Map(
      entries.map(([key, value]) => [
        this.encodeKey(key),
        this.encodeValue(value),
      ])
    )
  }

  get(key: DecodedKey) {
    this.#instance.get(this.encodeKey(key))
  }

  set(key: DecodedKey, value: DecodedValue) {
    this.#instance.set(this.encodeKey(key), this.encodeValue(value))
  }

  has(key: DecodedKey) {
    this.#instance.has(this.encodeKey(key))
  }
}

class Woo extends CodedMap {
  decodeKey(x: any) {
    return x
  }

  encodeKey(x: any) {
    return x
  }

  decodeValue(x: any) {
    return x
  }

  encodeValue(x: any) {
    return x
  }
}

const yar: Map<any, any> = new Woo()

export default CodedMap
