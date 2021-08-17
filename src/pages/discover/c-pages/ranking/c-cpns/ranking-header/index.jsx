import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { RankingHeaderWrapper } from './style'

import { formatMonthDay } from "@/utils/data-format";

import ZYSongOperationBar from '@/components/song-operation-bar'


export default memo(function ZYRankingHeader() {
  const { playList } = useSelector(state => ({
    playList: state.getIn(["ranking", "playList"])
  }), shallowEqual)
  return (
    <RankingHeaderWrapper>
      <div className="image">
        <img src={playList && playList.coverImgUrl} alt="" />
        <span className="image_cover">封面</span>
      </div>
      <div className="info">
        <div className="title">{playList.name}</div>
        <div className="time">
          <i className="clock sprite_icon2"></i>
          <div>最近更新：{formatMonthDay(playList.updateTime)}</div>
          <div className="update-f">{"每日更新"}</div>
        </div>
        <ZYSongOperationBar favorTitle={playList.subscribedCount}
                            shareTitle={playList.shareCount}
                            downloadTitle="下载"
                            commentTitle={playList.commentCount} />
      </div>
    </RankingHeaderWrapper>
  )
})
