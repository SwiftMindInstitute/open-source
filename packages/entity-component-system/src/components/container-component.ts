import WeakRefSet from '@bluesky.llc/weak-ref-set'
import { Entity } from '../types'

class ContainerComponent {
  items = new WeakRefSet<Entity>()

  empty() {
    this.items.clear()
  }

  has(item: Entity) {
    this.items.has(item)
  }

  add(item: Entity) {
    this.items.add(item)
  }

  take(item: Entity) {
    this.items.delete(item)
    return item
  }

  *contents() {
    return this.items.values()
  }
}

export default ContainerComponent
