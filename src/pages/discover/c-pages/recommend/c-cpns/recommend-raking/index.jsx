import React, { memo } from 'react'
import ZYThemeHeaderRcm from '@/components/theme-header-rcm'
import { RankingWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import {
  getTopListAction
} from '../../store/actionCreators'

import ZYTopRanking from '@/components/top-ranking'

export default memo(function ZYRecommendRaking() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  },[dispatch])
  const { upRanking,newRanking,originRanking } = useSelector(state => ({
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    originRanking: state.getIn(["recommend", "originRanking"])
  }), shallowEqual)
  return (
    <RankingWrapper>
      <ZYThemeHeaderRcm title="榜单" />
      <div className="tops">
        <ZYTopRanking info={originRanking} /> 
        <ZYTopRanking info={upRanking} /> 
        <ZYTopRanking info={newRanking} /> 
      </div>
    </RankingWrapper>
  )
})
