import createFactories from './create-factories'

describe('createFactories', () => {
  it('should create factory functions according to a schema', () => {
    const factories = createFactories(
      {
        factory: () => ({ a: 1 }),
      },
      'name'
    )
    const expected = { name: 'factory', a: 1 }
    const actual = factories.factory()

    expect(actual).toEqual(expected)
  })

  it('should default to type if no property name is defined', () => {
    const factories = createFactories({
      factory: () => ({ a: 1 }),
    })
    const expected = { type: 'factory', a: 1 }
    const actual = factories.factory()

    expect(actual).toEqual(expected)
  })
})

export {}
