import {
  AnyArray,
  AnyFunction,
  AnyKey,
  AnyObject,
  KeyOf,
} from '@swiftmind/utility-types'

const DISCRIMINANT_PROPERTY = 'type'

export type Token<
  A extends AnyKey = AnyKey,
  B extends AnyKey = AnyKey,
  C extends AnyObject = AnyObject
> = {
  [D in A]: B
} & C

export type Factories<
  A extends AnyKey,
  B extends AnyObject<AnyKey, AnyFunction<AnyArray, AnyObject>>
> = {
  [C in KeyOf<B>]: (..._: Parameters<B[C]>) => Token<A, C, ReturnType<B[C]>>
}

export interface FactoriesFactory {
  <A extends AnyObject, B extends AnyKey = typeof DISCRIMINANT_PROPERTY>(
    a: A,
    b?: B
  ): Factories<B, A>
}

/**
 * A factories factory for creating discriminated unions
 * @param schema Factory schema
 * @param key The discriminant property key
 * @returns
 * @example
 * ```
 * const ex1 = createFactories({
 *   test: () => ({ hello: 'world' })
 * }).test() // ({ type: 'test', hello: 'world' })
 *
 * const ex2 = createFactories({
 *   test: () => ({ hello: 'world' })
 * }, 'someKey').test() // ({ someKey: 'test', hello: 'world' })
 * ```
 */
export const createFactories: FactoriesFactory = (
  schema,
  key = DISCRIMINANT_PROPERTY as any
) =>
  Object.keys(schema).reduce((memo, value) => {
    memo[value] = (...params: any[]) => ({
      [key]: value,
      ...schema[value](...params),
    })

    return memo
  }, Object.create(null))

export default createFactories
