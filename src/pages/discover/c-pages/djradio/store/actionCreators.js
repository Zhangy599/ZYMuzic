import * as actionTypes from './constants'

import { 
  getDjRadioCateList,
  getDjRadioRecommend,
  getDjRadios
} from '@/services/djradio'


const changeCategoryAction = res => ({ type: actionTypes.CHANGE_CATEGORIES, categories: res.categories })

const changeRecommendsAction = res => ({ type: actionTypes.CHANGE_RECOMMENDS, recommends: res.djRadios })

const changeRadiosAction = res =>({type:actionTypes.CHANGE_RADIOS,radios:res.djRadios})

export const changeCurrentIdAction = currentId => ({ type: actionTypes.CHANGE_CURRENT_ID, currentId })

export const getRadioCategories = () => {
  return dispatch => {
    getDjRadioCateList().then(res => {
      dispatch(changeCategoryAction(res))
      dispatch(changeCurrentIdAction(res.categories[0].id))
    })
  }
}

export const getRadioRecommend = (currentId) => {
  return dispatch =>{
    getDjRadioRecommend(currentId).then(res=>{
      dispatch(changeRecommendsAction(res))
    })
  }
}

export const getRadios = (currentId,offset)=>{
  return dispatch=>{
    getDjRadios(currentId,30,offset).then(res=>{
      dispatch(changeRadiosAction(res))
    })
  }

}