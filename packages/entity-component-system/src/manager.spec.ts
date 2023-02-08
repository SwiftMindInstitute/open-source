import { bigintGenerator } from '@bluesky.llc/utils'
import Manager from './manager'
import System from './system'

describe('manager', () => {
  it('Should implement an entity component system implementation', () => {
    // Create an instance of the manager
    const manager = new Manager()

    // Create a component
    class ExistenceComponent {
      constructor(public exists: boolean = false) {}
    }

    // Create an entity
    const entity = manager.createEntity()

    // Add an instance of the component to the entity
    manager.setComponent(entity, new ExistenceComponent())

    // Create a system that operates on that type of component
    class ExsistenceSystem implements System {
      update(_: number, { query } = manager.api) {
        const entities = query([ExistenceComponent])

        for (const entity of entities) {
          const test = entity.getComponent(ExistenceComponent)

          if (test) {
            test.exists = true
          }
        }
      }
    }

    // Create an instance of the system
    const testSystem = new ExsistenceSystem()

    // Run the update function on the system
    testSystem.update(0)

    const expected = true
    const actual = manager.getComponent(entity, ExistenceComponent)?.exists

    expect(actual).toBe(expected)
  })

  it('Should implement an entity component system implementation', () => {
    // Create an instance of the manager with a different generator
    const manager = new Manager(bigintGenerator())

    const expected = true
    const actual = typeof manager.createEntity() === 'bigint'

    expect(actual).toBe(expected)
  })
})

export {}
