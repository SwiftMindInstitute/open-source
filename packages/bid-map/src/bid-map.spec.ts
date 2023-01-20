import BidMap from './bid-map'

describe('BidMap', () => {
  // This will be mutated by
  let biMap: BidMap<number, string>

  beforeEach(() => {
    biMap = new BidMap<number, string>()
  })

  it('Should call MapConstructor', () => {
    const params: [number, string][] = [
      [0, 'a'],
      [1, 'b'],
    ]
    // NOTE(hao) Overwrite the instance set in describeBefore for this test
    biMap = new BidMap<number, string>(params)
    const expected = params.length
    const actual = biMap.size

    expect(actual).toBe(expected)
  })

  it('Should set pairs one at a time', () => {
    biMap.set(0, 'a')
    const actual = biMap.size === 0
    const expected = false

    expect(actual).toBe(expected)
  })

  it('Should report 2:1 for size', () => {
    biMap.set(0, 'a')
    const actual = biMap.size
    const expected = 2

    expect(actual).toBe(expected)
  })

  it('Should allow key existence checks in either direction', () => {
    const pair: [number, string] = [0, 'a']
    biMap.set(...pair)
    const actual = pair.map(key => biMap.has(key))
    const expected = [true, true]

    expect(actual).toEqual(expected)
  })

  it('Should allow lookups in either direction', () => {
    const pair: [number, string] = [0, 'a']
    biMap.set(...pair)
    const actual = pair.map(key => biMap.get(key))
    const expected = [...pair.reverse()]

    expect(actual).toEqual(expected)
  })

  it('Should override previously set values', () => {
    const num = 0
    const override = 'b'
    biMap.set(num, 'a')
    biMap.set(num, override)
    const actual = biMap.get(num)
    const expected = override

    expect(actual).toBe(expected)
  })

  it('Should override for both parts of the pair', () => {
    const text = 'a'
    const override = 1
    biMap.set(0, text)
    biMap.set(override, text)
    const actual = biMap.get(text)
    const expected = override

    expect(actual).toBe(expected)
  })

  it('Should be ordered', () => {
    const num = 0
    const pairs: [number, string][] = [
      [num, 'a'],
      [1, 'b'],
      [num, 'c'],
    ]
    biMap.set(...pairs[0])
    biMap.set(...pairs[1])
    biMap.set(...pairs[2])
    const actual = [...biMap.entries()]
    const expected = [pairs[1], pairs[2]]

    expect(actual).toEqual(expected)
  })

  it('should delete in both directions', () => {
    const pairs: [number, string][] = [
      [0, 'a'],
      [1, 'b'],
      [2, 'c'],
    ]
    biMap.set(...pairs[0])
    biMap.set(...pairs[1])
    biMap.set(...pairs[2])
    biMap.delete(pairs[0][0]) // delete pairs[0] by num
    biMap.delete(pairs[1][1]) // delete pairs[1] by text
    const actual = [...biMap.entries()]
    const expected = [pairs[2]]

    expect(actual).toEqual(expected)
  })
})

export {}
