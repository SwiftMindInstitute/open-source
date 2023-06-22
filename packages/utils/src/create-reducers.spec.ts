import createReducers from './create-reducers'
import identity from './identity'

describe('createReducers', () => {
  it('should have functions that return state', () => {
    const initialState = 0
    const { reducer, actions } = createReducers(initialState, { identity })
    const expected = 0
    const actual = reducer(actions.identity())

    expect(actual).toBe(expected)
  })

  it('should return new state', () => {
    const initialState = 0
    const { reducer, actions } = createReducers(initialState, {
      increment: state => state + 1,
    })
    const expected = 1
    const actual = reducer(actions.increment())

    expect(actual).toBe(expected)
  })

  it('should allow resetting state', () => {
    const initialState = false
    const { reducer, actions, reset } = createReducers(initialState, {
      set: (_, value) => value,
      identity,
    })
    reducer(actions.set(true))
    reset()
    const expected = initialState
    const actual = reducer(actions.identity())

    expect(actual).toBe(expected)
  })
})

export {}
