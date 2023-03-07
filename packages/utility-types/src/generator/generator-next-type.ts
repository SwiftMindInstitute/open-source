/**
 * Return the next type of a generator
 * @alpha
 * @group Function
 * @example
 * ```
 * type Ex = GeneratorNextType<Generator<any, any, string>> // string
 * ```
 */
export type GeneratorNextType<A> = A extends Generator<any, any, infer B>
  ? B
  : never
