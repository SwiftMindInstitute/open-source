import interpolate from './interpolate'

describe('interpolate', () => {
  it('should do pass through if there are no variables present', () => {
    const template = 'a b c'
    const actual = interpolate(template)
    const expected = template

    expect(actual).toBe(expected)
  })

  it('should require additional parameters if variables are present', () => {
    const template = '{{a}} {{b}} {{c}}'
    const captureGroup = { start: '{{', end: '}}' } as const
    const actual = interpolate(template, captureGroup, {
      a: 'A',
      b: 'B',
      c: 'C',
    })
    const expected = 'A B C'

    expect(actual).toBe(expected)
  })

  it('should allow setting a custom capture group', () => {
    const template = '${a} ${b} ${c}'
    const actual = interpolate(
      template,
      { start: '\\${', end: '}' } as const,
      {
        a: 'A',
        b: 'B',
        c: 'C',
      } as const
    )
    const expected = 'A B C'

    expect(actual).toBe(expected)
  })
})

export {}
