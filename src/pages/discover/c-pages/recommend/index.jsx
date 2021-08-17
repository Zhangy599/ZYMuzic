import React, { memo } from 'react'

import ZYTopBanner from './c-cpns/top-banner'
import ZYHotRecommend from './c-cpns/hot-recommend'
import ZYRecommendRaking from './c-cpns/recommend-raking'
import ZYNewAlbum from './c-cpns/new-album'

import ZYUserLogin from './c-cpns/user-login'
import ZYSettleSinger from './c-cpns/settle-singer'
import ZYHotAnchor from './c-cpns/hot-anchor'



import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style'




function ZYRecommend() {

  return (
    <RecommendWrapper>
      {/* 推荐轮播图 */}
      <ZYTopBanner></ZYTopBanner>
      <Content className="wrap-v2">
        <RecommendLeft>
          <ZYHotRecommend />
          <ZYNewAlbum />
          <ZYRecommendRaking />
        </RecommendLeft>
        <RecommendRight>
          <ZYUserLogin />
          <ZYSettleSinger />
          <ZYHotAnchor />
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}


export default memo(ZYRecommend)
