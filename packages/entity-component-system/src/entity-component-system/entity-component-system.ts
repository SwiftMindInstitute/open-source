import { GeneratorYieldType } from '@bluesky.llc/utility-types'
import { createNumberGenerator } from '@bluesky.llc/utils'
import { Entity, EntityId } from '../types'
import ComponentManager from './component-manager'
import EntityHelper from './entity-helper'
import EntityManager from './entity-manager'
import QueryHelper from './query-helper'

class EntityComponentSystem<
  EntityGenerator extends Generator<EntityId> = ReturnType<
    typeof createNumberGenerator
  >,
  Id extends GeneratorYieldType<EntityGenerator> = GeneratorYieldType<EntityGenerator>
> {
  #entityGenerator: EntityGenerator
  #entityManager = new EntityManager<Id>()
  #componentManager = new ComponentManager<Id>()
  query: QueryHelper<Id>

  constructor(
    entityGenerator: EntityGenerator = createNumberGenerator() as EntityGenerator
  ) {
    this.#entityGenerator = entityGenerator
    this.query = new QueryHelper(this.#componentManager)
  }

  entity(entity: Entity<Id> = this.create()) {
    return new EntityHelper(entity, {
      entityManager: this.#entityManager,
      componentManager: this.#componentManager,
    })
  }

  create() {
    const { value: id } = this.#entityGenerator.next()

    return { id } as Entity<Id>
  }
}

export default EntityComponentSystem
