import * as actionTypes from './constants'
import {
  getTopBanners,
  getHotRecommend,
  getNewAlbum,
  getTopList,
  getArtistList
} from '@/services/recommend'

export const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

export const changeHotRecommendAction = res => ({ type: actionTypes.CHANGE_HOT_RECOMMEND, hotRecommends: res.result })

export const changeNewAlbumAction = res => ({ type: actionTypes.CHANGE_NEW_ALBUM, newAlbums: res.albums })

export const changeUpRankingAction = res => ({ type: actionTypes.CHANGE_UP_RAKING, upRanking: res.playlist })

export const changeNewRankingAction = res => ({ type: actionTypes.CHANGE_NEW_RAKING, newRanking: res.playlist })
export const changeOriginRankingAction = res => ({ type: actionTypes.CHANGE_ORIGIN_RAKING, originRanking: res.playlist })

export const changeSettleSings = res => ({ type: actionTypes.CHANGE_SETTLE_SINGS, settleSings: res.artists })

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}


export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommend(limit).then(res => {
      console.log(res)
      dispatch(changeHotRecommendAction(res))
    })
  }
}


export const getNewAlbumAction = (limit) => {
  return dispatch => {
    getNewAlbum(limit).then(res => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}

export const getTopListAction = (idx) => {
  return dispatch => {
    getTopList(idx).then(res => {
      switch (idx) {
        case 0:
          dispatch(changeUpRankingAction(res))
          break;
        case 2:
          dispatch(changeNewRankingAction(res))
          break;
        case 3:
          dispatch(changeOriginRankingAction(res))
          break;
        default:
          console.log("其他数据处理")
      }
    })
  }
}

export const getSettleSingsAction = (limit, cat) => {
  return dispatch => {
    getArtistList(limit, cat).then(res => {
      dispatch(changeSettleSings(res))
    })
  }
}
