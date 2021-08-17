import React, { memo } from 'react'

import {MyWrapper} from './style'


export default memo(function ZYMine() {
  return (
    <MyWrapper>
      <div className="content wrap-v2">
        <div className="pic">
          <a href="/#" className="login">ZYMine</a>
        </div>
      </div>
    </MyWrapper>
  )
})
