import React, { memo, useEffect } from 'react'

import { SongsWrapper } from './style'

import ZYSongsHeader from './c-cpns/songs-header'
import ZYSongsList from './c-cpns/songs-list'
import { useDispatch } from 'react-redux'

import { getSongList, getCategory } from './store/actionCreators'

export default memo(function ZYSongs() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategory())
    dispatch(getSongList(0))
  }, [dispatch])
  return (
    <SongsWrapper className="wrap-v2">
      <ZYSongsHeader />
      <ZYSongsList />
    </SongsWrapper>
  )
})
