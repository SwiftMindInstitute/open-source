/**
 * `Collection` implements a one-to-many map.
 */
class SetMap<A, B> {
  #map: Map<A, Set<B>>

  constructor() {
    this.#map = new Map<A, Set<B>>()
  }

  /**
   * If `key` exists on map return it else return a new Set
   * @param key The key to lookup
   * @returns Set<B>
   */
  #initValues(key: A) {
    if (this.has(key)) {
      return this.get(key)!
    } else {
      const components = new Set<B>()

      this.#map.set(key, components)

      return components
    }
  }

  /**
   * If `key` exists return `true` else `false`
   * @param key The key to check
   * @returns boolean
   */
  has(key: A) {
    return this.#map.has(key)
  }

  /**
   * Return the Set corresponding to `key`
   * @param key The key to lookup
   * @returns The Map corresponding to `key`
   */
  get(key: A) {
    return this.#map.get(key)
  }

  /**
   * Delete the Set corresponding to `key`
   * @param key The key to delete
   * @returns
   */
  delete(key: A) {
    return this.#map.delete(key)
  }

  /**
   * If the values of `key` has `value` return `true` else `false`
   * @param key The key to lookup
   * @param value The value to check
   * @returns
   */
  hasValue(key: A, value: B) {
    if (this.has(key)) {
      return this.get(key)!.has(value)
    }

    return false
  }

  /**
   * Lookup the set corresponding to `key` and add `value`
   * @param key The key to lookup
   * @param value The value to add
   */
  addValue(key: A, value: B) {
    const values = this.#initValues(key)

    values.add(value)

    return this
  }

  /**
   *
   * @param key The key to lookup
   * @param value The value to delete
   */
  deleteValue(key: A, value: B) {
    const values = this.#initValues(key)

    values.delete(value)

    return this
  }
}

export default SetMap
