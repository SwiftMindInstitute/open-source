import { AnyPrimitive, Tail } from '@swiftmind/utility-types'

export type ReducerFunction<A extends any = any> = (a: A, ...b: any[]) => A

export type ReducerFunctions<A extends any> = {
  [_: string]: ReducerFunction<A>
}

export interface Action<A extends AnyPrimitive, B extends any[]> {
  type: A
  params: B
}

/** Given a set of ReducerFunctions define the type for the actions */
export type ReducerActions<A extends any, B extends ReducerFunctions<A>> = {
  [C in keyof B]: (
    ..._: Tail<Parameters<B[C]>>
  ) => Action<C, Tail<Parameters<B[C]>>>
}

/**
 * Create a reducer function, actions, and a reset method.
 *
 * @param initialState
 * @param reducerFunctions
 * @returns
 */
function createReducers<A extends any, B extends ReducerFunctions<A>>(
  _: A,
  reducerFunctions: B
) {
  const reducer = <C extends keyof B>(
    state: A,
    { type, params }: Action<C, Tail<Parameters<B[C]>>>
  ): A => {
    const reducerMethod = reducerFunctions[type]

    return reducerMethod(state, ...params)
  }

  const actions: ReducerActions<A, B> = Object.keys(reducerFunctions).reduce(
    (memo, methodName: keyof B) => {
      memo[methodName] = (...params) => ({ type: methodName, params })

      return memo
    },
    {} as ReducerActions<A, B>
  )

  return { reducer, actions }
}

export default createReducers
