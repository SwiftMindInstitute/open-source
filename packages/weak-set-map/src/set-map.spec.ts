import SetMap from './set-map'

describe('setMap', () => {
  it('should allow checking the existence of a key', () => {
    const key = { key: 'key' }
    const value = { value: 'value' }
    const setMap = new SetMap()

    setMap.addValue(key, value)
    const expected = true
    const actual = setMap.has(key)

    expect(actual).toBe(expected)
  })

  it('should allow setting and getting collections', () => {
    const key = { key: 'key' }
    const value = { value: 'value' }
    const setMap = new SetMap()

    setMap.addValue(key, value)
    const values = setMap.get(key)!
    const expected = true
    const actual = values.has(value)

    expect(actual).toBe(expected)
  })

  it('should allow deleting values', () => {
    const key = { key: 'key' }
    const value = { value: 'value' }
    const setMap = new SetMap()

    setMap.addValue(key, value)
    setMap.deleteValue(key, value)
    const expected = false
    const actual = setMap.hasValue(key, value)

    expect(actual).toBe(expected)
  })

  it('should allow checking the existence of value in a collection', () => {
    const key = { key: 'key' }
    const value = { value: 'value' }
    const setMap = new SetMap()

    setMap.addValue(key, value)
    const expected = true
    const actual = setMap.hasValue(key, value)

    expect(actual).toBe(expected)
  })
})

export {}
