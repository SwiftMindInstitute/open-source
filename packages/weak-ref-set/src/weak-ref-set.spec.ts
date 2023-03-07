import WeakRefSet from './weak-ref-set'

describe(WeakRefSet.name, () => {
  it('should have an add and has method', () => {
    const ref = { a: 1 }
    const weakRefSet = new WeakRefSet()
    weakRefSet.add(ref)
    const expected = true
    const actual = weakRefSet.has(ref)

    expect(actual).toBe(expected)
  })

  it('should have a size property (getter)', () => {
    const ref = { a: 1 }
    const weakRefSet = new WeakRefSet()
    weakRefSet.add(ref)
    const expected = 1
    const actual = weakRefSet.size

    expect(actual).toBe(expected)
  })

  // FIXME(hao) determine a way to consistently trigger garbage collection
  // it('it should be garbage collected', async () => {
  //   const ref = { a: 1 }
  //   const weakRefSet = new WeakRefSet()
  //   weakRefSet.add(ref)
  //   weakRefSet.add({ farewell: 'Goodbye World!' })
  //   const expected = 1
  //   const actual = await new Promise(resolve => {
  //     setTimeout(() => resolve(weakRefSet.size), 3000)
  //   })

  //   expect(actual).toBe(expected)
  // })

  it('should support deleting items', async () => {
    const refA = { a: 1 }
    const refB = { b: 2 }
    const weakRefSet = new WeakRefSet()
    weakRefSet.add(refA)
    weakRefSet.add(refB)
    weakRefSet.delete(refB)
    const expected = 1
    const actual = weakRefSet.size

    expect(actual).toBe(expected)
  })

  it('should have a clear method', () => {
    const refA = { a: 1 }
    const refB = { b: 2 }
    const weakRefSet = new WeakRefSet()
    weakRefSet.add(refA)
    weakRefSet.add(refB)
    weakRefSet.clear()
    const expected = 0
    const actual = weakRefSet.size

    expect(actual).toBe(expected)
  })

  it('should have a keys method', () => {
    const refA = { a: 1 }
    const refB = { b: 2 }
    const weakRefSet = new WeakRefSet([refA, refB])
    const expected = [{ a: 1 }, { b: 2 }]
    const actual = [...weakRefSet.keys()]

    expect(actual).toEqual(expected)
  })

  it('should have a values method', () => {
    const refA = { a: 1 }
    const refB = { b: 2 }
    const weakRefSet = new WeakRefSet([refA, refB])
    const expected = [{ a: 1 }, { b: 2 }]
    const actual = [...weakRefSet.keys()]

    expect(actual).toEqual(expected)
  })

  it('should have same output for keys and values', () => {
    const refA = { a: 1 }
    const refB = { b: 2 }
    const weakRefSet = new WeakRefSet([refA, refB])
    const expected = [...weakRefSet.keys()]
    const actual = [...weakRefSet.values()]

    expect(actual).toEqual(expected)
  })

  it('should have an entries method', () => {
    const refA = { a: 1 }
    const refB = { b: 2 }
    const weakRefSet = new WeakRefSet([refA, refB])
    const expected = [
      [{ a: 1 }, { a: 1 }],
      [{ b: 2 }, { b: 2 }],
    ]
    const actual = [...weakRefSet.entries()]

    expect(actual).toEqual(expected)
  })

  it('should not create multiple entries for the same key', () => {
    const ref = { a: 1 }
    const weakRefSet = new WeakRefSet()
    weakRefSet.add(ref)
    weakRefSet.add(ref)
    const expected = 1
    const actual = weakRefSet.size

    expect(actual).toBe(expected)
  })
})

export {}
