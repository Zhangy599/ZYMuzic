import React, { memo } from 'react'

import {ThemeHeaderNormalWrapper} from './style'

export default memo(function ZYThemeHeaderNormal(props) {
  const {title,rightSlot} = props
  return (
    <ThemeHeaderNormalWrapper>
      <div className="title">{title}</div>
      <div className="right">
        {rightSlot}
      </div>
    </ThemeHeaderNormalWrapper>
  )
})
