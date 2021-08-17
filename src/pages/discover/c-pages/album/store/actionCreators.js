import * as propTypes from './constants'
import {
  getHotAlbums,
  getTopAlbums
} from '@/services/album'


const changeHotAlbumsAction = res => ({ type: propTypes.CHANGE_HOT_ALBUMS, hotAlbums: res.albums })

const changeTopAlbumsAction = res => ({ type: propTypes.CHANGE_TOP_ALBUMS, topAlbums: res.albums })

const changeTopTotalAction = total => ({ type: propTypes.CHANGE_TOP_TOTAL, total })

export const getHotAlbumsAction = () => {
  return dispatch => {
    getHotAlbums().then(res => {
      dispatch(changeHotAlbumsAction(res))
    })
  }
}

export const getTopAlbumsAction = (page) => {
  return dispatch => {
    getTopAlbums(30, (page - 1) * 30).then(res => {
      dispatch(changeTopAlbumsAction(res))
      dispatch(changeTopTotalAction(res.total))
    })
  }
}