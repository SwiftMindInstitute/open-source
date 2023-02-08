import { AnyFunction } from '@bluesky.llc/utility-types'
import Entity from './entity'

abstract class System {
  abstract update(
    _a: number,
    _b: { query: AnyFunction<[Function[]], Entity[]> }
  ): void
}

export default System
