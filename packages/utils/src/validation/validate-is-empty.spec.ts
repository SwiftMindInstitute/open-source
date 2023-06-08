import validateIsEmpty from './validate-is-empty'

describe('validateIsEmpty', () => {
  it('should return true if a string is empty', () => {
    const expected = true
    const actual = validateIsEmpty('')

    expect(actual).toBe(expected)
  })

  it('should return false if a string is not empty', () => {
    const expected = false
    const actual = validateIsEmpty('test')

    expect(actual).toBe(expected)
  })
})

export {}
