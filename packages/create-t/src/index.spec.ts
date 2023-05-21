import createT from './index'

describe('createT', () => {
  it('It should kick ass and take names', () => {
    const expected = 'kick ass and take names'
    const t = createT({
      motto: 'kick {{this}} and take {{that}}',
    } as const)
    const actual = t('motto', { this: 'ass', that: 'names' } as const)

    expect(actual).toBe(expected)
  })

  it('It should allow for setting different capture settings', () => {
    const expected = 'We are the champions'
    const t = createT(
      {
        anthem: 'We are the ::title::',
      } as const,
      { start: '::', end: '::' } as const
    )
    const actual = t('anthem', { title: 'champions' } as const)

    expect(actual).toBe(expected)
  })
})

export {}
