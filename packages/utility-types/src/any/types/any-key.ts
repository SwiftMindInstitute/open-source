/**
 * Type that can be used for any key
 * @example
 * ```
 * type Ex = Record<AnyKey, any> = Record<string | number | symbol, any>
 * ```
 */
export type AnyKey = keyof any

export {}
