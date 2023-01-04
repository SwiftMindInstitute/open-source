import createWhich from './create-which'

describe('createWhich', () => {
  it('should allow lookups', () => {
    const lookupKey = 'a'
    const expected = 1
    const which = createWhich({
      a: expected,
      b: 'b',
    })

    expect(which(lookupKey)).toBe(expected)
  })
  it('should return undefined for missing lookups', () => {
    const lookupKey = 'z'
    const expected = undefined
    const which = createWhich({
      a: 1,
      b: 'b',
    })

    expect(which(lookupKey)).toBe(expected)
  })
  it('should allow setting a default fallback lookup', () => {
    const lookupKey = 'z'
    const expected = undefined
    const which = createWhich(
      {
        a: 1,
        b: expected,
      },
      'b'
    )

    expect(which(lookupKey)).toBe(expected)
  })
})

export {}
