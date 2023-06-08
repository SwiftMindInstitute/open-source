import validateIsEmail from './validate-is-email'

describe('validateIsEmail', () => {
  it('should return true if an email is valid', () => {
    const expected = true
    const actual = validateIsEmail('hans.oksendahl@swiftmindinstitute.org')

    expect(actual).toBe(expected)
  })

  it('should return false if an email is invalid', () => {
    const expected = false
    const actual = validateIsEmail('hans.oksendahl@')

    expect(actual).toBe(expected)
  })
})

export {}
