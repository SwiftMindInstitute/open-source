import { AnyArray } from '@any/any-array'

/**
 * Extract the keys or indices from an object `A`
 * @example
 * ```
 * const Ex1 = KeyOf<{ a: string, b: number }> // 'a' | 'b'
 * const Ex2 = KeyOf<['a', 'b']> // 0 | 1
 * ```
 */
export type KeyOf<A extends object> = A extends AnyArray
  ? {
      [B in keyof A & string]: A[B] extends A[number] ? B : never
    }[keyof A & string]
  : keyof A
