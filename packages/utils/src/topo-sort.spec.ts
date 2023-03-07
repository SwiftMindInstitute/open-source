import topoSort from './topo-sort'

describe('topoSort', () => {
  it('should sort a dependency graph', () => {
    const deps = new Map([
      ['c', new Set(['b'])],
      ['a', new Set()],
      ['b', new Set(['a'])],
    ])
    const expected = new Set(['a', 'b', 'c'])
    const actual = topoSort(deps)

    expect(actual).toEqual(expected)
  })

  it('should work even if not all nodes are defined at top level', () => {
    const deps = new Map([['a', new Set(['b', 'c'])]])
    const expected = new Set(['a', 'b', 'c'])
    const actual = topoSort(deps)

    expect(actual).toEqual(expected)
  })

  it('should throw on a circular dependency', () => {
    const test = () => {
      topoSort(
        new Map([
          ['a', new Set('b')],
          ['b', new Set('b')],
          ['c', new Set('a')],
        ])
      )
    }

    expect(test).toThrow()
  })
})

export {}
