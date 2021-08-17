import React, { memo } from 'react'

import {DjRadioWapper} from './style'

import ZYRadioCategory from './c-cpns/radio-category'
import ZYRadioRecommend from './c-cpns/radio-recommend'
import ZYRadioRanking from './c-cpns/radio-ranking'

export default memo(function ZYDjradio() {
  return (
    <DjRadioWapper className="wrap-v2">
      <ZYRadioCategory />
      <ZYRadioRecommend />
      <ZYRadioRanking />
    </DjRadioWapper>
  )
})
