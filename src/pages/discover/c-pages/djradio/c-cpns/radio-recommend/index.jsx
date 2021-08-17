import React, { memo, useEffect } from 'react'


import ZYRadioRecommendCover from '@/components/radio-recommend-cover'

import ZYThemeHeaderNormal from '@/components/theme-header-normal'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { getRadioRecommend } from '../../store/actionCreators'
import { RecommendWrapper } from './style'

export default memo(function ZYRadioRecommend() {
  const { currentId, recommends } = useSelector(state => ({
    currentId: state.getIn(["djradio", "currentId"]),
    recommends: state.getIn(["djradio", "recommends"])
  }), shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    if (currentId === 0) return
    dispatch(getRadioRecommend(currentId))
  }, [dispatch, currentId])
  return (
    <RecommendWrapper>
      <ZYThemeHeaderNormal title="优秀新电台" />
      <div className="radio-list">
        {
          recommends.slice(0, 5).map((item, index) => {
            return (
              <ZYRadioRecommendCover key={item.id} info={item} />
            )
          })
        }
      </div>

    </RecommendWrapper>
  )
})
