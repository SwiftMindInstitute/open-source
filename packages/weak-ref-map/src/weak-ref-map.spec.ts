import WeakRefMap from './weak-ref-map'

describe('weakRefMap', () => {
  it('should have a constructor and has method', () => {
    const key = { key: 'key' }
    const value = { value: 'value' }
    const weakRefMap = new WeakRefMap([[key, value]])
    const expected = true
    const actual = weakRefMap.has(key)

    expect(actual).toBe(expected)
  })

  it('should have a set method and has method', () => {
    const key = { key: 'key' }
    const value = { value: 'value' }
    const weakRefMap = new WeakRefMap()
    weakRefMap.set(key, value)
    const expected = true
    const actual = weakRefMap.has(key)

    expect(actual).toBe(expected)
  })

  it('should have a set method and get method', () => {
    const key = { key: 'key' }
    const value = { value: 'value' }
    const weakRefMap = new WeakRefMap()
    weakRefMap.set(key, value)
    const expected = { value: 'value' }
    const actual = weakRefMap.get(key)

    expect(actual).toEqual(expected)
  })

  it('should have a delete method', () => {
    const key = { key: 'key' }
    const value = { value: 'value' }
    const weakRefMap = new WeakRefMap()
    weakRefMap.set(key, value)
    weakRefMap.delete(key)
    const expected = false
    const actual = weakRefMap.has(key)
    expect(actual).toBe(expected)
  })

  jest.setTimeout(40000)

  // FIXME(hao) determine a way to force garbage collection
  // it('should be garbage collected', async () => {
  //   const keyRef = new WeakRef({ key: 'key' })
  //   const value = { value: 'value' }
  //   const weakRefMap = new WeakRefMap()
  //   weakRefMap.set(keyRef.deref()!, value)
  //   const expected = false
  //   const actual = await new Promise(resolve =>
  //     setTimeout(() => resolve(weakRefMap.has(keyRef.deref()!)), 4000)
  //   )

  //   expect(actual).toBe(expected)
  // })
})

export {}
