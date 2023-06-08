import validateHasProp from './validate-has-prop'

describe('validateHasProp', () => {
  it('should validate that an object has a prop', () => {
    const expected = true
    const actual = validateHasProp({ a: 'a' }, 'a')

    expect(actual).toBe(expected)
  })

  it('should return false if the prop is not present', () => {
    const expected = false
    const actual = validateHasProp({ a: 'a' }, 'c')

    expect(actual).toBe(expected)
  })
})

export {}
