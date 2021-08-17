import React, { memo } from 'react'

import {AlbumWrapper} from './style'

import ZYHotAlbum from './c-cpns/hot-album'
import ZYTopAlbum from './c-cpns/top-album'

export default memo(function ZYAlbum() {
  return (
    <AlbumWrapper className="wrap-v2">
      <ZYHotAlbum />
      <ZYTopAlbum />
    </AlbumWrapper>
  )
})
