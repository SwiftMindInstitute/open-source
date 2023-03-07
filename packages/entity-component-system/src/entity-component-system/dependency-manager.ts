import WeakRefSet from '@bluesky.llc/weak-ref-set'
import System from '../system'

class DependencyManager<Dependency extends System> {
  dependencies: WeakMap<Dependency, WeakRefSet<Dependency>> = 
}

export default DependencyManager
