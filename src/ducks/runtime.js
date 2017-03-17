import { createAction, createReducer } from 'redux-act'

const NS = '@@runtime/'

export const actions = {
  setRuntimeVariable: createAction(`${NS}SET_VARIABLE`),
}

const initialState = {}

const reducer = createReducer({
  [actions.setRuntimeVariable]: (state, { name, value }) =>
    ({ ...state, [name]: value }),
}, initialState)

export default reducer
