import { createBigintGenerator } from '@bluesky.llc/utils'
import EntityComponentSystem from './entity-component-system'

describe(EntityComponentSystem.name, () => {
  it('should support creating entities', () => {
    const ecs = new EntityComponentSystem()
    const expected = true
    const actual = typeof ecs.create() !== 'undefined'

    expect(actual).toBe(expected)
  })

  it('should support creating entities with a custom generator', () => {
    const ecs = new EntityComponentSystem(createBigintGenerator())
    const expected = true
    const actual = typeof ecs.create().id === 'bigint'

    expect(actual).toBe(expected)
  })

  it('should support creating entities through create()', () => {
    const ecs = new EntityComponentSystem()
    const expected = 0
    const actual = ecs.create().id

    expect(actual).toBe(expected)
  })

  it('should support adding class components', () => {
    class TestComponent {
      test: boolean = true
    }
    const ecs = new EntityComponentSystem()
    const entity = ecs.entity()
    entity.add(TestComponent)
    const expected = true
    const actual = entity.has(TestComponent)

    expect(actual).toBe(expected)
  })

  it('should support adding functional components', () => {
    const testComponent = () => ({ test: true })
    const ecs = new EntityComponentSystem()
    const entity = ecs.entity()
    entity.add(testComponent)
    const expected = true
    const actual = entity.has(testComponent)

    expect(actual).toBe(expected)
  })

  it('should support set union', () => {
    const testComponentA = () => ({ a: 1 })
    const testComponentB = () => ({ b: 2 })
    const ecs = new EntityComponentSystem()
    const entity1 = ecs.create()
    ecs.entity(entity1).add(testComponentA)
    const entity2 = ecs.create()
    ecs.entity(entity2).add(testComponentB)
    const expected = new Set([entity1, entity2])
    const actual = ecs.query.union(testComponentA, testComponentB)

    expect(actual).toEqual(expected)
  })

  it('should support set intersection', () => {
    const testComponentA = () => ({ a: 1 })
    const testComponentB = () => ({ b: 2 })
    const ecs = new EntityComponentSystem()
    const entity1 = ecs.create()
    ecs.entity(entity1).add(testComponentA)
    const entity2 = ecs.create()
    ecs.entity(entity2).add(testComponentA).add(testComponentB)
    const expected = new Set([entity2])
    const actual = ecs.query.intersection(testComponentA, testComponentB)

    expect(actual).toEqual(expected)
  })

  it('should support set complement', () => {
    const testComponentA = () => ({ a: 1 })
    const testComponentB = () => ({ b: 2 })
    const ecs = new EntityComponentSystem()
    const entity1 = ecs.create()
    ecs.entity(entity1).add(testComponentA)
    const entity2 = ecs.create()
    ecs.entity(entity2).add(testComponentA).add(testComponentB)
    const expected = new Set([entity1])
    const actual = ecs.query.complement(testComponentA, testComponentB)

    expect(actual).toEqual(expected)
  })

  it('should support set difference', () => {
    const testComponentA = () => ({ a: 1 })
    const testComponentB = () => ({ b: 2 })
    const ecs = new EntityComponentSystem()
    const entity1 = ecs.create()
    ecs.entity(entity1).add(testComponentA)
    const entity2 = ecs.create()
    ecs.entity(entity2).add(testComponentB)
    const expected = new Set([entity1, entity2])
    const actual = ecs.query.difference(testComponentA, testComponentB)

    expect(actual).toEqual(expected)
  })
})
