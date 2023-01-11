/**
 * 🚫 DO NOT EXPORT
 *
 * Because this symbol is not shared outside of the Utility-Types module we can
 * create an interface that is private to the library. This is integral to
 * protecting users from exposure to the private details of recursive types.
 *
 * A unique symbol, not exported from library
 * @internal
 */
export const TYPE_NAME = Symbol()

/**
 * 🚫 DO NOT EXPORT
 *
 * Generates an options interface. This type has a unique key which is not
 * exported from the library. The creation of an interface with an unique symbol
 * means that the user will never be able to supply this interface to any
 * generic type it can only be used internally in the library. An options object
 * is ideal for being able to pass down options in a recursive type definition
 * as an added benefit it protects the user from having to know a type's
 * implementation.
 *
 *
 * @internal
 * ```
 * type Ex = Opts<'Ex', { value: any }> // { [TYPE_NAME]: 'Ex', value: any }
 * ```
 */
export type Opts<A extends string, B extends object> = {
  [_ in typeof TYPE_NAME]: Capitalize<A>
} & B

export {}
