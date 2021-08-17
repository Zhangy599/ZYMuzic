import React, { memo } from 'react'

import {CoverWrapper} from './style'

export default memo(function ZYRadioRecommendCover(props) {
  const {info} = props
  return (
    <CoverWrapper>
      <a href="/#">
        <img src={info.picUrl} alt="" />
      </a>
        <a href="/#" className="name text-nowrap">{info.name}</a>
        <p className="text-nowrap">{info.desc}</p>
    </CoverWrapper>
  )
})
