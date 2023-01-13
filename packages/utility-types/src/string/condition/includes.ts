/**
 * Check if the string `B` is in `A`.
 * @group Condition
 * @group String
 * @example
 * ```
 * type Ex = Includes<'book', 'oo'> // true
 * ```
 */
export type Includes<
  A extends string,
  B extends string
> = A extends `${infer _C}${B}${infer _D}` ? true : false
