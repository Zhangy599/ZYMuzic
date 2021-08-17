import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getHotAlbumsAction } from '../../store/actionCreators'

import { HotAlbumWrapper } from './style'

import ZYThemeHeaderNormal from '@/components/theme-header-normal'
import ZYAlbumCover from '@/components/album-cover'


export default memo(function ZYHotAlbum() {
  const dispatch = useDispatch()
  const { hotAlbums } = useSelector(state => ({
    hotAlbums: state.getIn(["album", "hotAlbums"])
  }), shallowEqual)
  useEffect(() => {
    dispatch(getHotAlbumsAction())
  }, [dispatch])
  return (
    <HotAlbumWrapper>
      <ZYThemeHeaderNormal title="热门新碟" />
      <div className="album-list">
        {
          hotAlbums.slice(0, 10).map(item => {
            return <ZYAlbumCover size={130}
                                 width={153}
                                 bgp={"-845px"}
                                 key={item.id}
                                 info={item} />
          })
        }
      </div>
    </HotAlbumWrapper>
  )
})
