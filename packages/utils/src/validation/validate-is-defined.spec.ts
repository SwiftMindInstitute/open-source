import validateIsDefined from './validate-is-defined'

describe('validateIsDefined', () => {
  it('should validate that a given primitive is defined', () => {
    const expected = true
    const actual = validateIsDefined('blah')

    expect(actual).toBe(expected)
  })

  it('should return false if the variable is not defined', () => {
    const expected = false
    const actual = validateIsDefined(undefined)

    expect(actual).toBe(expected)
  })
})

export {}
