import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { getSizeImage } from '@/utils/data-format';

import ZYSongOperationBar from '@/components/song-operation-bar'

import {
  PlayerInfoWrapper,
  PlayerInfoLeft,
  PlayerInfoRight
} from './style'
import { useState } from 'react';

export default memo(function ZYPlayerInfo() {
  const [isSpread, setIsSpread] = useState(false)
  const { currentSong, lyricList } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"]),
    lyricList: state.getIn(["player", "lyricList"])
  }), shallowEqual)
  const totalLyricCount = isSpread ? lyricList.length : 13
  return (
    <PlayerInfoWrapper>
      <PlayerInfoLeft>
        <div className="image">
          <img src={getSizeImage(currentSong.al.picUrl, 130)} alt="" />
          <span className="cover image_cover"></span>
        </div>
        <div className="link">
          <i className="sprite_icon2"></i>
          <a href="/#">生成外链播放器</a>
        </div>
      </PlayerInfoLeft>
      <PlayerInfoRight isSpread={isSpread}>
        <div className="header">
          <i className="sprite_icon2"></i>
          <span className="title">{currentSong.name}</span>
        </div>
        <div className="singer">
          <span className="label">歌手：</span>
          <a href="#/" className="name">{currentSong.ar[0].name}</a>
        </div>
        <div className="album">
          <span className="laber">所属专辑：</span>
          <a href="/#" className="name">{currentSong.al.name}</a>
        </div>
        <ZYSongOperationBar favorTitle="收藏"
          shareTitle="分享"
          downloadTitle="下载"
          commentTitle="(167366)" />
        <div className="lyric">
          <div className="lyric-info">
            {
              lyricList.slice(0, totalLyricCount).map(item => {
                return (
                  <p key={item.time} className="text">{item.content}</p>
                )
              })
            }
          </div>
          <button className="lyric-control" onClick={_ => setIsSpread(!isSpread)}>
            {isSpread ? "收起" : "展开"}
            <i className="sprite_icon2"></i>
          </button>
        </div>
      </PlayerInfoRight>
    </PlayerInfoWrapper>
  )
})
