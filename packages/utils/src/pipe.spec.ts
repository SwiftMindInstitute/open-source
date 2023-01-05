import pipe from './pipe'

describe('pipe', () => {
  it('should operate as identity when only one parameter is provided', () => {
    const expectedValue = 42
    const actualValue = pipe(expectedValue)

    expect(actualValue).toBe(expectedValue)
  })

  it('should evaluate a function passed as the second argument', () => {
    const initialValue = 0
    const addOne = (x: number) => x + 1
    const actualValue = pipe(initialValue, addOne)
    const expectedValue = 1

    expect(actualValue).toBe(expectedValue)
  })

  it('should support up to 15 functions', () => {
    const initialValue = 0
    const addOne = (x: number) => x + 1
    const actualValue = pipe(
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
    const expectedValue = 15

    expect(actualValue).toBe(expectedValue)
  })
})

export {}
