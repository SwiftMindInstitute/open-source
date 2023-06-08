import validateIsEqual from './validate-is-equal'

describe('validateIsEqual', () => {
  it('should return true if two values are equal', () => {
    const expected = true
    const actual = validateIsEqual(2, 2)

    expect(actual).toBe(expected)
  })

  it('should return false if two values are not equal', () => {
    const expected = false
    const actual = validateIsEqual(2, 1)

    expect(actual).toBe(expected)
  })
})

export {}
