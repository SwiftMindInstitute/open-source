import flow from './flow'

describe('pipe', () => {
  it('it should simply return the function for a single argument', () => {
    const initialValue = 42
    const addOne = (x: number) => x + 1
    const actual = flow(addOne)(initialValue)
    const expected = 43

    expect(actual).toBe(expected)
  })

  it('should support up to 15 functions', () => {
    const initialValue = 0
    const addOne = (x: number) => x + 1
    const actual = flow(
      addOne,
      addOne,
      addOne,
      addOne,
      addOne,
      addOne,
      addOne,
      addOne,
      addOne,
      addOne,
      addOne,
      addOne,
      addOne,
      addOne,
      addOne,
      addOne
    )(initialValue)
    const expected = 16

    expect(actual).toBe(expected)
  })
})

export {}
