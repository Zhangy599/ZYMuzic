import * as actionTypes from './constants'
import { Map } from 'immutable'

const defaultState = Map({
  category: [],
  categorySongs: [],
  currentCategory: "全部"
})


function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_CATEGORY:
      return state.set("currentCategory", action.currentCategory)
    case actionTypes.CHANGE_SONG_LIST:
      return state.set("categorySongs", action.categorySongs)
    case actionTypes.CHANGE_CATEGORY:
      return state.set("category", action.category)
    default:
      return state
  }
}

export default reducer