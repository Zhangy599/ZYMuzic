import React, { memo } from 'react'
import { TopRankingWrapper } from './style'
import { useDispatch } from 'react-redux'

import { getSizeImage } from '@/utils/data-format'

import { getSongDetailAction } from '@/pages/player/store/actionCreators'

import PropTypes from 'prop-types'

function ZYTopRanking(props) {
  const { info } = props
  const dispatch = useDispatch()
  const playMusic = (id) => {
    console.log(id)
    dispatch(getSongDetailAction(id))
  }
  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl, 80)} alt="" />
          <a href="/todo" className="image_cover">ranking</a>
        </div>
        <div className="info">
          <a href="/todo">{info.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {
          info.tracks && info.tracks.slice(0, 10).map((item, index) => {
            return (
              <div key={item.id} className="list-item">
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <a href="/todo" className="name text-nowrap">{item.name}</a>
                  <div className="operate">
                    <button className="btn sprite_02 play" onClick={e => { playMusic(item.id) }} ></button>
                    <button className="btn sprite_icon2 addto"></button>
                    <button className="btn sprite_02 favor"></button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="footer">
        <a href="/todo">查看全部 &gt;</a>
      </div>
    </TopRankingWrapper>
  )
}

ZYTopRanking.propTypes = {
  info: PropTypes.object.isRequired
}

ZYTopRanking.defaultProps = {
  info: {}
}
export default memo(ZYTopRanking)
