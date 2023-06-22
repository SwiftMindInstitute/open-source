import { Tail } from '@swiftmind/utility-types'

type ReducerFunction<A extends any = any> = (a: A, ...b: any[]) => A

type ReducerFunctions<A extends any> = {
  [_: string]: ReducerFunction<A>
}

/** Given a set of ReducerFunctions define the type for the actions */
type ReducerActions<A extends any, B extends ReducerFunctions<A>> = {
  [C in keyof B]: (..._: Tail<Parameters<B[C]>>) => {
    type: C
    params: Tail<Parameters<B[C]>>
  }
}

/**
 * Create a reducer function, actions, and a reset method.
 *
 * @param initialState
 * @param reducerFunctions
 * @returns
 */
function createReducers<A extends any, B extends ReducerFunctions<A>>(
  initialState: A,
  reducerFunctions: B
) {
  let state = initialState

  const reducer = <C extends keyof B>({
    type,
    params,
  }: {
    type: C
    params: Tail<Parameters<B[C]>>
  }): A => {
    const reducerMethod = reducerFunctions[type]

    state = reducerMethod(state, ...params)

    return state
  }

  const actions: ReducerActions<A, B> = Object.keys(reducerFunctions).reduce(
    (memo, methodName: keyof B) => {
      memo[methodName] = (...params) => ({ type: methodName, params })

      return memo
    },
    {} as ReducerActions<A, B>
  )

  const reset = () => (state = initialState)

  return { reducer, actions, reset }
}

export default createReducers
