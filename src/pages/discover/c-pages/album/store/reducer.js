import * as propTypes from './constants'
import { Map } from 'immutable'

const defaultState = Map({
  hotAlbums: [],
  topAlbums: [],
  topTotal: 0
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case propTypes.CHANGE_HOT_ALBUMS:
      return state.set("hotAlbums", action.hotAlbums)
    case propTypes.CHANGE_TOP_ALBUMS:
      return state.set("topAlbums", action.topAlbums)
    case propTypes.CHANGE_TOP_TOTAL:
      return state.set("topTotal", action.total)
    default:
      return state
  }
}

export default reducer