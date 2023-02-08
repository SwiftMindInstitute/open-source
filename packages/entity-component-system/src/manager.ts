import {
  AnyConstructor,
  AnyFunction,
  AnyKey,
  ConstructorReturnType,
} from '@bluesky.llc/utility-types'
import { isUndefined, numberGenerator } from '@bluesky.llc/utils'
import { Component } from './component'
import Entity from './entity'

class Manager {
  #generateId: Generator
  #entityInstanceMap: Map<any, Entity | undefined>
  #componentEntitiesMap: Map<Function, Set<Entity>>
  #query: AnyFunction<[Function[]], Entity[]>
  api: { query: AnyFunction<[Function[]], Entity[]> }

  constructor(generateId: Generator = numberGenerator()) {
    this.#generateId = generateId
    this.#entityInstanceMap = new Map()
    this.#componentEntitiesMap = new Map()
    this.#query = this.query.bind(this)
    this.api = { query: this.#query }
  }

  /**
   * Return a unique id from the supplied generator
   * @returns An entity id
   */
  createEntity() {
    const { value: id } = this.#generateId.next()!

    this.#entityInstanceMap.set(id, new Entity(id))

    return id
  }

  /**
   * Get the entity instance associated with `id`
   * @param id An entity id
   * @returns An entity instance
   */
  #getEntity<A>(id: A) {
    return this.#entityInstanceMap.get(id)
  }

  deleteEntity<A>(id: A) {
    this.#entityInstanceMap.delete(id)
  }

  /**
   *
   * @param ctor Component class
   * @returns
   */
  #initEntitiesByComponent(ctor: Function) {
    const entities = this.#componentEntitiesMap.get(ctor)

    if (!isUndefined(entities)) {
      return entities
    }

    const newEntities = new Set<Entity>()
    this.#componentEntitiesMap.set(ctor, newEntities)

    return newEntities
  }

  #getEntitiesByComponent(ctor: Function) {
    return this.#componentEntitiesMap.get(ctor)
  }

  setComponent(id: AnyKey, component: Component) {
    const entity = this.#getEntity(id)

    if (!isUndefined(entity)) {
      entity.setComponent(component)
      this.#initEntitiesByComponent(component.constructor).add(entity)
    }
  }

  getComponent<A extends AnyKey, B extends AnyConstructor>(id: A, ctor: B) {
    const entity = this.#getEntity(id)

    if (!isUndefined(entity)) {
      return entity.getComponent(ctor) as ConstructorReturnType<B>
    }

    return undefined
  }

  deleteComponent(id: AnyKey, ctor: Function) {
    const entity = this.#getEntity(id)

    if (!isUndefined(entity)) {
      entity.deleteComponent(ctor)

      this.#getEntitiesByComponent(ctor)?.delete(entity)
    }
  }

  query(ctors: Function[]) {
    return ctors.reduce((memo, ctor) => {
      const entities = this.#getEntitiesByComponent(ctor)

      if (entities) {
        return [...new Set([...memo, ...entities])]
      } else {
        return memo
      }
    }, [] as Entity[])
  }
}

export default Manager
