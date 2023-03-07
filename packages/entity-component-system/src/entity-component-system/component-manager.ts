import WeakRefSet from '@bluesky.llc/weak-ref-set'
import { Entity, EntityId, Factory, FactoryToEntities } from '../types'

class ComponentManager<Id extends EntityId> {
  #factoryToEntities: FactoryToEntities<Id> = new WeakMap()

  getEntities(factory: Factory) {
    return this.#factoryToEntities.get(factory)
  }

  hasEntities(factory: Factory) {
    return this.#factoryToEntities.has(factory)
  }

  deleteEntities(factory: Factory) {
    return this.#factoryToEntities.delete(factory)
  }

  addEntity(factory: Factory, entity: Entity<Id>) {
    this.#factoryToEntities.set(factory, this.#init(factory).add(entity))

    return this
  }

  hasEntity(factory: Factory, entity: Entity<Id>) {
    const entities = this.getEntities(factory)

    return entities ? entities.has(entity) : false
  }

  deleteEntity(factory: Factory, entity: Entity<Id>) {
    const entities = this.getEntities(factory)

    return entities ? entities.delete(entity) : false
  }

  #init(factory: Factory) {
    return this.getEntities(factory) ?? new WeakRefSet<Entity<Id>>()
  }
}

export default ComponentManager
