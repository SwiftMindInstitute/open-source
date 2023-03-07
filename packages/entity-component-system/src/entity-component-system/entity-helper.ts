import { AnyFunction, Constructor } from '@bluesky.llc/utility-types'
import { isConstructor, isFunction } from '@bluesky.llc/utils'
import { Entity, EntityId, Factory } from '../types'
import ComponentManager from './component-manager'
import EntityManager from './entity-manager'

interface EntityHelperConfig<Id extends EntityId> {
  entityManager: EntityManager<Id>
  componentManager: ComponentManager<Id>
}

class EntityHelper<Id extends EntityId> {
  #entityRef: WeakRef<Entity<Id>>
  #entityManager: EntityManager<Id>
  #componentManager: ComponentManager<Id>

  constructor(
    entity: Entity<Id>,
    { entityManager, componentManager }: EntityHelperConfig<Id>
  ) {
    this.#entityRef = new WeakRef(entity)
    this.#entityManager = entityManager
    this.#componentManager = componentManager
  }

  add<A extends Constructor<any[]>, B extends ConstructorParameters<A>>(
    component: A,
    ...params: B
  ): EntityHelper<Id>
  add<A extends AnyFunction<any[]>, B extends Parameters<A>>(
    component: A,
    ...params: B
  ): EntityHelper<Id>
  add<A extends AnyFunction<[]> | Constructor<[]>>(
    component: A
  ): EntityHelper<Id>
  add(...params: any[]) {
    const entity = this.#entityRef.deref()

    if (entity) {
      const [factory, factoryParams = []] = params
      const component = isFunction(factory)
        ? isConstructor(factory)
          ? new factory(...factoryParams)
          : factory(...factoryParams)
        : factory

      this.#entityManager.setComponent(entity, factory, component)
      this.#componentManager.addEntity(factory, entity)
    }

    return this
  }

  has(factory: Factory) {
    const entity = this.#entityRef.deref()

    return entity ? this.#entityManager.hasComponent(entity, factory) : false
  }

  delete(factory: Factory) {
    const entity = this.#entityRef.deref()

    if (entity) {
      this.#componentManager.deleteEntity(factory, entity)
      return this.#entityManager.deleteComponent(entity, factory)
    } else {
      return false
    }
  }
}

export default EntityHelper
