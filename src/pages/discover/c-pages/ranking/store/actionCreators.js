import * as actionTypes from './constants'

import { getTopList, getRankingList } from '@/services/ranking'

const changeTopListAction = topList => ({ type: actionTypes.CHANGE_TOP_LIST, topList })

const changePlayListAction = playList => ({ type: actionTypes.CHANGE_PLAYLIST, playList })

export const changeCurrentIndex = currentIndex => ({ type: actionTypes.CHANGE_CURRENT_INDEX, currentIndex })




export const getTops = () => {
  return dispatch => {
    getTopList().then(res => {
      console.log(res)
      dispatch(changeTopListAction(res.list))
    })
  }
}

export const getRaking = (id) => {
  return dispatch => {
    getRankingList(id).then(res => {
      console.log(res)
      dispatch(changePlayListAction(res.playlist))
    })
  }
}