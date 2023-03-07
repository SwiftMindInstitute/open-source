import {
  AnyArray,
  AnyFunction,
  AnyObject,
  Constructor,
} from '@bluesky.llc/utility-types'
import WeakRefSet from '@bluesky.llc/weak-ref-set'

/**
 * At its core an entity is just a unique identifier
 */
export type EntityId = number | string | symbol | bigint | object

/**
 * This library uses weak references so entities are stored as objects
 */
export type Entity<A extends EntityId = EntityId> = AnyObject<'id', A>

/**
 * A set of weak references to entities
 */
export type Entities<A extends EntityId = EntityId> = WeakRefSet<Entity<A>>

/**
 * An object
 */
export type Component = AnyObject

/**
 * A class constructor or factory function for creating components
 */
export type Factory =
  | Constructor<any[], Component>
  | AnyFunction<AnyArray, Component>

export type EntityToComponents<A extends EntityId = EntityId> = WeakMap<
  Entity<A>,
  WeakMap<Factory, Component>
>

export type FactoryToEntities<A extends EntityId = EntityId> = WeakMap<
  Factory,
  Entities<A>
>
