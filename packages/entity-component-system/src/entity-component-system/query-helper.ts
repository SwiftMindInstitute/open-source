import { AnySet } from '@bluesky.llc/utility-types'
import {
  setComplement,
  setDifference,
  setIntersection,
  setUnion,
} from '@bluesky.llc/utils'
import { EntityId, Factory } from '../types'
import ComponentManager from './component-manager'

class QueryHelper<Id extends EntityId> {
  #componentManager: ComponentManager<Id>

  constructor(componentManager: ComponentManager<Id>) {
    this.#componentManager = componentManager
  }

  #ascendingSortComparator(a: AnySet, b: AnySet) {
    return a.size - b.size
  }

  intersection(...factories: Factory[]) {
    return factories
      .map(factory => this.#init(factory))
      .sort(this.#ascendingSortComparator)
      .reduce((a, b) => setIntersection(a, b))
  }

  union(...factories: Factory[]) {
    return factories
      .map(factory => this.#init(factory))
      .reduce((a, b) => setUnion(a, b))
  }

  difference(...factories: Factory[]) {
    return factories
      .map(factory => this.#init(factory))
      .reduce((a, b) => setDifference(a, b))
  }

  complement(...factories: Factory[]) {
    return factories
      .map(factory => this.#init(factory))
      .reduce((a, b) => setComplement(a, b))
  }

  #init(factory: Factory) {
    return factory instanceof Set
      ? factory
      : new Set(this.#componentManager.getEntities(factory)!.values()) ??
          new Set()
  }
}

export default QueryHelper
