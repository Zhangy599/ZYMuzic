import React, { memo } from 'react'

import {ArtistWrapper} from './style'

import ZYArtistCategory from './c-cpns/artist-category'
import ZYArtistList from './c-cpns/artist-list'

export default memo(function ZYArtist() {
  return (
    <ArtistWrapper>
      <div className="content wrap-v2">
        <ZYArtistCategory />
        <ZYArtistList />
      </div> 
    </ArtistWrapper>
  )
})
