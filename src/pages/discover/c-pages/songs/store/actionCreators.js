import * as actionTypes from './constants'

import { PER_PAGE_NUMBER } from './constants'

import { getSongCategoryList, getSongCategory } from '@/services/songs'

import { 
  handleSongsCategory
} from "@/utils/handle-data";

export const changeCurrentCategoryAction = currentCategory => ({
  type: actionTypes.CHANGE_CURRENT_CATEGORY,
  currentCategory
})


const changeSongListAction = res => ({ type: actionTypes.CHANGE_SONG_LIST, categorySongs: res })

const changeCategoryAction = categoryData => ({ type: actionTypes.CHANGE_CATEGORY, category: categoryData })

export const getSongList = page => {
  return (dispatch, getState) => {
    const name = getState().getIn(["songs", "currentCategory"])
    getSongCategoryList(name, page * PER_PAGE_NUMBER).then(res => {
      dispatch(changeSongListAction(res))
    })
  }
}

export const getCategory = () => {
  return dispatch => {
    getSongCategory().then(res => {
      console.log(res)
      const categoryData = handleSongsCategory(res)
      console.log(categoryData)
      dispatch(changeCategoryAction(categoryData))
    })
  }
}