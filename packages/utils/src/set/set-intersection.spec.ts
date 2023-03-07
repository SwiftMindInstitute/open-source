import setIntersection from './set-intersection'

describe('setIntersection', () => {
  it('should calculate the intersection of two sets', () => {
    const setA = new Set(['a', 'b', 'c'])
    const setB = new Set(['b', 'c', 'd'])
    const expected = new Set(['b', 'c'])
    const actual = setIntersection(setA, setB)

    expect(actual).toEqual(expected)
  })

  it('should be symmetric', () => {
    const setA = new Set(['a', 'b', 'c'])
    const setB = new Set(['b', 'c', 'd'])
    const intAB = setIntersection(setA, setB)
    const intBA = setIntersection(setB, setA)

    expect(intAB).toEqual(intBA)
  })
})

export {}
