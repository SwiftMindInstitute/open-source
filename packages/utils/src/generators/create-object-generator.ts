import {
  AnyKey,
  EmptyObject,
  GeneratorReturnType,
  GeneratorYieldType,
} from '@swiftmind/utility-types'

/**
 * An object reference yielded (or returned) from the object generator
 */
type Reference<A extends AnyKey = AnyKey, B = any> = {
  [C in A]: B
}

/**
 * The reference value
 */
type ReferenceValue<A extends AnyKey | Generator> = A extends Generator
  ? GeneratorYieldType<A> | GeneratorReturnType<A>
  : A

/**
 * An interface for createObjectGenerator
 */
interface CreateObjectGenerator {
  <A extends AnyKey, B extends AnyKey | Generator>(a: A, b: B): Generator<
    Reference<A, ReferenceValue<B>>,
    Reference<A, ReferenceValue<B>>
  >
  (): Generator<EmptyObject, EmptyObject>
}

/**
 * An generator for object (useful for WeakMap keys)
 */
const createObjectGenerator: CreateObjectGenerator = function* (
  ...params: any[]
) {
  let ref = Object.create(null)

  while (true === true) {
    if (params.length > 0) {
      const [id, value] = params
      Object.assign(ref, { [id]: value.next().value })
    }

    yield ref
  }

  return ref
}

export default createObjectGenerator
