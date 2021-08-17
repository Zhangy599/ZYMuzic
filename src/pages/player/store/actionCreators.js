import { getSongDetail, getLyric } from '@/services/player'

import * as actionTypes from './constants'

import { getRandomNumber } from '@/utils/math-utils'
import { parseLyric } from '@/utils/parse-lyric'


const changeCurrentSongAction = currentSong => ({ type: actionTypes.CHANGE_CURRENT_SONG, currentSong })

const changePlayListAction = playList => ({ type: actionTypes.CHANGE_PLAY_LIST, playList })

const changeCurrentSongIndexAction = index => ({ type: actionTypes.CHANGE_CURRENT_SONG_INDEX, index })

const changeLyricListAction = lyricList => ({ type: actionTypes.CHANGE_LYRIC_LIST, lyricList })

export const changeSequenceAction = sequence => ({ type: actionTypes.CHANGE_SEQUENCE, sequence })

export const changeCurrentLyricIndexAction = index =>({type:actionTypes.CHANGE_CURRENT_LYRIC_INDEX,index})

export const changeCurrentIndexAndSongAction = tag => {
  return (dispatch, getState) => {
    const sequence = getState().getIn(["player", "sequence"])
    let currentSongIndex = getState().getIn(["player", "currentSongIndex"])
    const playList = getState().getIn(["player", "playList"])
    switch (sequence) {
      case 1://随机播放
        let randomIndex = getRandomNumber(playList.length)
        while (randomIndex === currentSongIndex) {
          randomIndex = getRandomNumber(playList.length)
        }
        currentSongIndex = randomIndex
        break;
      default://顺序播放
        currentSongIndex += tag
        if (currentSongIndex >= playList.length) currentSongIndex = 0
        if (currentSongIndex < 0) currentSongIndex = playList.length - 1
    }
    const currentSong = playList[currentSongIndex]
    dispatch(changeCurrentSongAction(currentSong))
    dispatch(changeCurrentSongIndexAction(currentSongIndex))
    dispatch(getLyricAction(currentSong.id))
  }
}


export const getSongDetailAction = (ids) => {
  console.log(ids)
  return (dispatch, getState) => {
    //1.根据id查找playList中是否已经有了该歌曲
    const playList = getState().getIn(["player", "playList"])
    const songIndex = playList.findIndex(song => song.id === ids)
    let song = null
    //2.判断是否找到了歌曲
    if (songIndex !== -1) { //找到了歌曲
      dispatch(changeCurrentSongIndexAction(songIndex))
      song = playList[songIndex]
      dispatch(changeCurrentSongAction(song))
      dispatch(getLyricAction(song.id))
    } else {//没有找到歌曲
      //请求歌曲数据
      getSongDetail(ids).then(res => {
        song = res.songs && res.songs[0]
        const newPlayList = [...playList]
        newPlayList.push(song)
        dispatch(changePlayListAction(newPlayList))
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
        dispatch(changeCurrentSongAction(song))

        if (!song) return
        dispatch(getLyricAction(song.id))
      })
    }

  }
}

export const getLyricAction = id => {
  return dispatch => {
    getLyric(id).then(res => {
      const lyric = res.lrc.lyric
      parseLyric(lyric)
      const lyricList = parseLyric(lyric)
      dispatch(changeLyricListAction(lyricList))
    })
  }
}