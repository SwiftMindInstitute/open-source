import setComplement from './set-complement'

describe('setComplement', () => {
  it('should calculate the complement of a and b', () => {
    const a = new Set([1, 2, 3])
    const b = new Set([2, 3, 4])
    const expected = new Set([1])
    const actual = setComplement(a, b)

    expect(actual).toEqual(expected)
  })

  it('should not be symmetric', () => {
    const a = new Set([1, 2, 3])
    const b = new Set([2, 3, 4])
    const diffAB = setComplement(a, b)
    const diffBA = setComplement(b, a)

    expect(diffAB).not.toEqual(diffBA)
  })
})

export {}
