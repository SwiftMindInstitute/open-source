import validateIsFloat from './validate-is-float'

describe('validateIsFloat', () => {
  it('should return true if the value is a float', () => {
    const expected = true
    const actual = validateIsFloat(0.5)

    expect(actual).toBe(expected)
  })

  it('should return false if the value is not a float', () => {
    const expected = false
    const actual = validateIsFloat(20)

    expect(actual).toBe(expected)
  })
})

export {}
