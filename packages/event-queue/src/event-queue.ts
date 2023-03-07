import {
  AnyFunction,
  AnyKey,
  AnyObject,
  KeyOf,
} from '@bluesky.llc/utility-types'

type EventType = AnyObject<AnyKey, AnyObject>

/**
 * # Event Queue
 *
 * Made with ❤️ by [bluesky.llc](https://bluesky.llc).
 *
 * @beta
 * @example
 * ```
 * interface Event {
 *   message: { body: string }
 * }
 *
 * const eventQueue = new EventQueue<Event>()
 *
 * eventQueue.on('message', ({ body }) => console.log(body))
 *
 * eventQueue.emit('message', { body: 'Hello World!' })
 * ```
 */
class EventQueue<Event = EventType> {
  #map: Map<KeyOf<Event>, Set<AnyFunction<[any], void>>> = new Map()

  /**
   * Add an event listener
   * @param eventType KeyOf<Event>
   * @param callback An event listener
   */
  on<A extends KeyOf<Event>>(
    eventType: A,
    callback: AnyFunction<[Event[A]], void>
  ) {
    if (!this.#map.has(eventType)) {
      this.#map.set(eventType, new Set())
    }

    const callbacks = this.#map.get(eventType)

    if (callbacks) {
      callbacks.add(callback)
    }
  }

  /**
   * Remove an event listener
   * @param eventType An object
   * @param callback An event listener reference
   */
  off<A extends KeyOf<Event>>(
    eventType: A,
    callback?: AnyFunction<[Event[A]], void>
  ) {
    if (callback) {
      const callbacks = this.#map.get(eventType)

      if (callbacks) {
        callbacks.delete(callback)
      }
    } else {
      this.#map.delete(eventType)
    }
  }

  /**
   * Emit an event
   * @param eventType KeyOf<Event>
   * @param event Event[typeof eventType]
   */
  emit<A extends KeyOf<Event>>(eventType: A, event: Event[A]) {
    const callbacks = this.#map.get(eventType)

    if (callbacks) {
      for (const callback of callbacks) {
        callback(event)
      }
    }
  }
}

export default EventQueue
