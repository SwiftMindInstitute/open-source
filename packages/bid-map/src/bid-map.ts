/**
 * Bidirectional Map (BidMap)
 * @experimental
 * @example
 * ```
 * const bidMap = new BidMap<number, string>([[0, 'a'], [1, 'b']])
 *
 * const ex1 = bidMap(0)   // 'a'
 * const ex2 = bidMap('a') // 0
 * const ex3 = bidMap(1)   // 'b'
 * const ex4 = bidMap('b') // 1
 *
 * console.log([...bidMap.keys()]) // [0, 'a', 1, 'b']
 * ```
 */
class BidMap<A, B> {
  private map: Map<A | B, A | B>

  constructor(...params: ConstructorParameters<MapConstructor>) {
    this.map = new Map<A | B, A | B>(...(params as any[]))
  }

  /**
   * Get the size of the map
   */
  get size() {
    return this.map.size
  }

  /**
   * Clear the map
   */
  clear() {
    this.map.clear()
  }

  /**
   * Check if a key exists
   * @returns boolean indicating whether a key exists in the map
   */
  has(key: A | B) {
    return this.map.has(key)
  }

  /**
   * Set a pair mapping
   * @param key A
   * @param value B
   */
  set(key: A, value: B) {
    this.delete(key)
    this.delete(value)

    this.map.set(key, value)
    this.map.set(value, key)
  }

  /**
   * Get a value
   * @param key A | B
   * @returns The value associated with the key.
   */
  get(key: A | B) {
    return this.map.get(key)
  }

  /**
   * Delete a pair
   * @param key A | B
   */
  delete(key: A | B) {
    if (this.map.has(key)) {
      const value = this.get(key)!

      this.map.delete(key)
      this.map.delete(value)
    }
  }

  /**
   * Generate an iterator that yields pairs `[A, B]`
   */
  *entries() {
    const iterator = this.map.keys()

    for (let i = 0; i < this.map.size; i += 2) {
      const { value: key } = iterator.next()
      const { value } = iterator.next()

      yield [key, value]
    }
  }

  /**
   * Generate an iterator that yields keys
   */
  keys() {
    return this.map.keys()
  }
}

export default BidMap
