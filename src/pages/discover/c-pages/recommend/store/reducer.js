import { Map } from 'immutable'
import * as actionTypes from './constants'


const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
  upRanking: {},
  newRanking: {},
  originRanking: {},

  settleSings: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set('topBanners', action.topBanners)
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommends', action.hotRecommends)
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set('newAlbums', action.newAlbums)
    case actionTypes.CHANGE_UP_RAKING:
      return state.set("upRanking", action.upRanking)
    case actionTypes.CHANGE_NEW_RAKING:
      return state.set("newRanking", action.newRanking)
    case actionTypes.CHANGE_ORIGIN_RAKING:
      return state.set("originRanking", action.originRanking)
    case actionTypes.CHANGE_SETTLE_SINGS:
      return state.set("settleSings", action.settleSings)

    default:
      return state
  }
}

export default reducer

