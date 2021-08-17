import React, { memo,useEffect } from 'react'

import ZYTopRanking from './c-cpns/top-ranking'
import ZYRankingHeader from './c-cpns/ranking-header'
import ZYRankingList from './c-cpns/ranking-list'


import { getTops } from './store/actionCreators'

import {
  RankingWrapper,
  RankingLeft,
  RankingRight
} from './style'
import { useDispatch } from 'react-redux'

export default memo(function ZYRanking() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTops())
  }, [dispatch])
  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <ZYTopRanking />
      </RankingLeft>
      <RankingRight>
        <ZYRankingHeader />
        <ZYRankingList />
      </RankingRight>
    </RankingWrapper>
  )
})
