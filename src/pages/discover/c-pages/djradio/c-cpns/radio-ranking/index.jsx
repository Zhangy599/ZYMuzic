import React, { memo } from 'react'
import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getRadios } from '../../store/actionCreators'

import { RankingWrapper } from './style'
import ZYRadioRankingCover from '@/components/radio-ranking-cover'
import ZYRadioThemeHeaderNormal from '@/components/theme-header-normal'
import Pagination from '@/components/pagination'
import { useState } from 'react'

export default memo(function ZYRadioRanking() {
  const [currentPage,setCurrentPage] = useState(1)
  const { currentId,radios } = useSelector(state => ({
    currentId: state.getIn(["djradio", "currentId"]),
    radios: state.getIn(["djradio", "radios"])
  }),shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRadios(currentId, 30))
  }, [dispatch, currentId])

  const onPageChange = page=>{
    setCurrentPage(page)
    dispatch(getRadios(currentId,30 * page))
  }
  return (
    <RankingWrapper>
      <ZYRadioThemeHeaderNormal title="电台排行榜" />
      <div className="rank-list">
        {
          radios.map(item=>{
            return (
              <ZYRadioRankingCover key={item.id} radio={item} />
            )
          })
        }
      </div>
      <Pagination currentPage={currentPage}
                  total={1000} 
                  pageSize={30}
                  onPageChange={onPageChange}></Pagination>
    </RankingWrapper>
  )
})
