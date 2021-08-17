import * as actionTypes from './constants'

import { Map } from 'immutable'

const defaultState = Map({
  categories: [],
  currentId: 0,
  recommends: [],
  radios:[]
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORIES:
      return state.set("categories", action.categories)
    case actionTypes.CHANGE_CURRENT_ID:
      return state.set("currentId", action.currentId)
    case actionTypes.CHANGE_RECOMMENDS:
      return state.set("recommends", action.recommends)
    case actionTypes.CHANGE_RADIOS:
      return state.set("radios",action.radios)
    default:
      return state
  }
}

export default reducer