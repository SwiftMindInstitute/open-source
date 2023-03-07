import WeakRefMap from '@bluesky.llc/weak-ref-map'
import {
  Component,
  Entity,
  EntityId,
  EntityToComponents,
  Factory,
} from '../types'

/**
 * ## Entity Manager
 * - getComponents
 * - hasComponents
 * - deleteComponents
 * - hasComponent
 * - getComponent
 * - setComponent
 * - deleteComponent
 * @internal
 */
class EntityManager<Id extends EntityId> {
  #entityToComponents: EntityToComponents<Id> = new WeakMap()

  getComponents(entity: Entity<Id>) {
    return this.#entityToComponents.get(entity)
  }

  hasComponents(entity: Entity<Id>) {
    return this.#entityToComponents.has(entity)
  }

  deleteComponents(entity: Entity<Id>) {
    return this.#entityToComponents.delete(entity)
  }

  getComponent(entity: Entity<Id>, factory: Factory) {
    const factoryToComponent = this.getComponents(entity)

    return factoryToComponent && factoryToComponent.get(factory)
  }

  setComponent(entity: Entity<Id>, factory: Factory, component: Component) {
    this.#entityToComponents.set(
      entity,
      this.#init(entity).set(factory, component)
    )

    return this
  }

  hasComponent(entity: Entity<Id>, factory: Factory) {
    const factoryToComponent = this.getComponents(entity)

    return factoryToComponent ? factoryToComponent.has(factory) : false
  }

  deleteComponent(entity: Entity<Id>, factory: Factory) {
    const factoryToComponent = this.getComponents(entity)

    return factoryToComponent ? factoryToComponent.delete(factory) : false
  }

  #init(entity: Entity<Id>) {
    return this.getComponents(entity) ?? new WeakRefMap()
  }
}

export default EntityManager
