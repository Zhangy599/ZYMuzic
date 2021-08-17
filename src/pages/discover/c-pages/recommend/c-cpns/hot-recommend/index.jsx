import React, { memo, useEffect } from 'react'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { HOT_RECOMMEND_LIMIT } from '@/common/constants'

import ZYThemeHeaderRcm from '@/components/theme-header-rcm'

import { getHotRecommendAction } from '../../store/actionCreators'

import { HotRecommendWrapper } from './style'

import ZYSongsCover from '@/components/songs-cover'


export default memo(function ZYHotRecommend() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
  }, [dispatch])

  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual)

  return (
    <HotRecommendWrapper>
      <ZYThemeHeaderRcm title="热门推荐" keywords={["华语", "流行", "摇滚", "民谣", "电子"]} />
      <div className="recommend-list">
        {
          hotRecommends.map((item, index) => {
            return (
              <ZYSongsCover key={item.id} info={item} />
            )
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
