import React, { memo, useEffect, useRef, useState, useCallback } from 'react'

import { getSizeImage, formatMinuteSecond, getPlayerSong } from '@/utils/data-format'

import {
  PlaybarWrapper,
  Control,
  PlayInfo,
  Operator
} from './style'

import { Slider,message } from 'antd'

import {
  getSongDetailAction,
  changeSequenceAction,
  changeCurrentIndexAndSongAction,
  changeCurrentLyricIndexAction
} from '../store/actionCreators'
import {
  shallowEqual,
  useDispatch,
  useSelector
} from 'react-redux'

import { NavLink } from 'react-router-dom'

export default memo(function ZYAppPlayerBar() {
  const [currentTime, setCurrentTime] = useState(0)

  const [isPlaying, setIsPlaying] = useState(false)

  const [progress, setProgress] = useState(0)

  const [isChanging, setIsChanging] = useState(false)

  const dispatch = useDispatch()
  const audioRef = useRef()
  const {
    currentSong,
    sequence,
    lyricList,
    currentLyricIndex
  } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"]),
    sequence: state.getIn(["player", "sequence"]),
    lyricList: state.getIn(["player", "lyricList"]),
    currentLyricIndex: state.getIn(["player", "currentLyricIndex"])
  }), shallowEqual)
  useEffect(() => {
    dispatch(getSongDetailAction(29567189))
    console.log(123)
  }, [dispatch])
  useEffect(() => {
    audioRef.current.src = getPlayerSong(currentSong.id)
    audioRef.current.play().then(res => {
      setIsPlaying(true)
    }).catch(err => {
      setIsPlaying(false)
    })
  }, [currentSong])

  const picUrl = (currentSong.al && currentSong.al.picUrl) || ""
  const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手"
  const duration = currentSong.dt || 0
  const playMusic = useCallback(() => {
    setIsPlaying(!isPlaying)
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
  }, [isPlaying])

  const timeUpdate = (e) => {
    const { currentTime } = e.target
    if (!isChanging) {
      setCurrentTime(currentTime * 1000)
      setProgress(currentTime * 1000 / duration * 100)
    }
    let i = 0
    for (; i < lyricList.length; i++) {
      let lyricItem = lyricList[i]
      if (currentTime * 1000 < lyricItem.time) {
        break;
      }
    }
    if (currentLyricIndex !== i - 1) {
      dispatch(changeCurrentLyricIndexAction(i - 1))
      message.open({
        content:lyricList[i - 1] && lyricList[i - 1].content,
        duration:0,
        key:"lyric",
        className:"lyric-class"
      })
    }
  }


  const handleMusicEnded = () => {
    if (sequence === 2) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    } else {
      dispatch(changeCurrentIndexAndSongAction(1))
    }
  }

  const changeSequence = () => {
    let currentSequence = sequence + 1
    if (currentSequence > 2) {
      currentSequence = 0
    }
    dispatch(changeSequenceAction(currentSequence))
  }

  const sliderChange = useCallback((value) => {
    const currentTime = value / 100 * duration
    setIsChanging(true)
    setCurrentTime(currentTime)
    setProgress(value)
  }, [duration])
  const sliderAfterChange = useCallback((value) => {

    const currentTime = value / 100 * duration / 1000
    audioRef.current.currentTime = currentTime
    setCurrentTime(currentTime * 1000)
    setIsChanging(false)
    if (!isPlaying) {
      playMusic()
    }
  }, [duration, playMusic, isPlaying])
  const changeMusic = (tag) => {
    dispatch(changeCurrentIndexAndSongAction(tag))
  }

  return (
    <PlaybarWrapper className="sprite_player" >
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying} s>
          <button className="prev sprite_player" onClick={e => changeMusic(-1)}></button>
          <button className="play sprite_player" onClick={e => playMusic()}></button>
          <button className="next sprite_player" onClick={e => changeMusic(1)}></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImage(picUrl, 34)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span>{currentSong.name}</span>
              <a href="/#" className="singer-name">{singerName}</a>
            </div>
            <div className="progress">
              <Slider defaultValue={30}
                value={progress}
                onAfterChange={sliderAfterChange}
                onChange={sliderChange} />
              <div className="time">
                <span className="now-time">{formatMinuteSecond(currentTime)}</span>
                <span className="divider">/</span>
                <span>{formatMinuteSecond(duration)}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="btn sprite_player favor"></button>
            <button className="btn sprite_player share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop" onClick={e => { changeSequence() }}></button>
            <button className="sprite_player btn playlist">5</button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={e => timeUpdate(e)} onEnded={e => handleMusicEnded(e)} />
    </PlaybarWrapper>
  )
})
