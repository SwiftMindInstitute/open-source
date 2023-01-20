/**
 * Alias of `keyof A` to maintain parity with `ValueOf`
 *
 * For arrays use `IndexOf`
 *
 * @beta
 * @group Object
 * @example
 * ```
 * type Ex = KeyOf<{ a: string, b: number }> // 'a' | 'b'
 * ```
 */
export type KeyOf<A> = keyof A
