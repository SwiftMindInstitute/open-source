/**
 * Alias of `keyof A` to maintain parity with `ValueOf`
 * @group Object
 * @example
 * ```
 * type Ex = KeyOf<{ a: string, b: number }> // 'a' | 'b'
 * ```
 */
export type KeyOf<A extends object> = keyof A

export {}
