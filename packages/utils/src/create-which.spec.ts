import createWhich from './create-which'

describe('createWhich', () => {
  it('should allow lookups', () => {
    const expected = 1
    const which = createWhich({
      a: expected,
      b: 'b',
    })

    expect(which('a')).toBe(expected)
  })
  it('should return undefined for missing lookups', () => {
    const expected = undefined
    const which = createWhich({
      a: 1,
      b: 'b',
    })

    expect(which('z')).toBe(expected)
  })
  it('should allow setting defaults', () => {
    const expected = undefined
    const which = createWhich(
      {
        a: 1,
        b: expected,
      },
      'b'
    )

    expect(which('z')).toBe(expected)
  })
})

export {}
