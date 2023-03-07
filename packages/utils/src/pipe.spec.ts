import pipe from './pipe'

describe('pipe', () => {
  it('should operate as identity when only one parameter is provided', () => {
    const expected = 42
    const actual = pipe(expected)

    expect(actual).toBe(expected)
  })

  it('should evaluate a function passed as the second argument', () => {
    const initialValue = 0
    const addOne = (x: number) => x + 1
    const actual = pipe(initialValue, addOne)
    const expected = 1

    expect(actual).toBe(expected)
  })

  it('should support up to 15 functions', () => {
    const initialValue = 0
    const addOne = (x: number) => x + 1
    const actual = pipe(
      initialValue,
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
    )
    const expected = 15

    expect(actual).toBe(expected)
  })
})

export {}
