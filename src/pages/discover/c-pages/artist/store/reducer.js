import * as actionTypes from './constants'
import { Map } from 'immutable'

const defaultState = Map({
  currentArea: -1,
  currentType: {
    name: "推荐歌手",
    type: 1
  },
  artistList:[]
})


function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_AREA:
      return state.set("currentArea", action.currentArea)
    case actionTypes.CHANGE_CURRENT_TYPE:
      return state.set("currentType", action.currentType)
    case actionTypes.CHANGE_ARTIST_LIST:
      return state.set("artistList",action.artistList)
    default:
      return state
  }
}

export default reducer