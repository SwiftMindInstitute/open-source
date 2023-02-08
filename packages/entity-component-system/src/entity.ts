import { AnyConstructor, AnyKey } from '@bluesky.llc/utility-types'
import { isUndefined } from '@bluesky.llc/utils'
import { Component } from './component'

class Entity {
  readonly id: AnyKey
  #components: Map<Function, Component>

  constructor(id: AnyKey) {
    this.id = id
    this.#components = new Map()
  }

  setComponent(component: Component) {
    this.#components.set(component.constructor, component)
  }

  getComponent<A extends AnyConstructor>(ctor: A) {
    const component = this.#components.get(ctor)

    return isUndefined(component)
      ? undefined
      : (component as ConstructorReturnType<A>)
  }

  deleteComponent(ctor: Function) {
    this.#components.delete(ctor)
  }
}

export default Entity
