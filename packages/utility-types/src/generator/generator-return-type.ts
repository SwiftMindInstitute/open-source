/**
 * Return the return type of a generator
 * @alpha
 * @group Function
 * @example
 * ```
 * type Ex = GeneratorReturnType<Generator<any, string, any>> // string
 * ```
 */
export type GeneratorReturnType<A> = A extends Generator<any, infer B>
  ? B
  : never
