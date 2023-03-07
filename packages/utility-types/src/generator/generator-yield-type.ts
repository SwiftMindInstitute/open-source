/**
 * Return the yield type of a generator
 * @alpha
 * @group Function
 * @example
 * ```
 * type Ex = GeneratorYieldType<Generator<string, any, any>> // string
 * ```
 */
export type GeneratorYieldType<A> = A extends Generator<infer B> ? B : never
