import React, { memo } from 'react'

import ZYPlayerInfo from './c-cpns/player-info'

import {
  PlayerWrapper,
  PlayerLeft,
  PlayerRight
} from './style'
export default memo(function ZYPlayer() {
  return (
    <PlayerWrapper className="wrap-v2">
      <div className="content">
        <PlayerLeft>
          <ZYPlayerInfo />
        </PlayerLeft>
        <PlayerRight></PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
