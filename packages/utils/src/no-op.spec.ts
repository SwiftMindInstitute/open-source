import noOp from './no-op'

describe('noOp', () => {
  it('should not take parameters', () => {
    expect(() => {
      // @ts-ignore
      noOp('test')
    }).toThrow
  })

  it('should return undefined', () => {
    const expected = undefined
    const actual = noOp()

    expect(expected).toBe(actual)
  })
})

export {}
