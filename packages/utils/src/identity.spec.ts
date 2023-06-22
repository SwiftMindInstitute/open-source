import identity from './identity'

describe('identity', () => {
  it('should return its input with a reference to the same object', () => {
    const expected = {}
    const actual = identity(expected)

    expect(actual).toBe(expected)
  })

  it('should return the same value', () => {
    const expected = 'Hello World!'
    const actual = identity(expected)

    expect(actual).toBe(expected)
  })
})

export {}
