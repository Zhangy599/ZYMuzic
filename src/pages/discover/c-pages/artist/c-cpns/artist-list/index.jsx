import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'


import ZYThemeHeaderNormal from '@/components/theme-header-normal'
import ZYAlphaList from './c-cpns/alpha-list'
import ZYArtistItem from './c-cpns/artist-item'


import { ArtistListWrapper } from './style'

export default memo(function ZYArtistList() {
  const { currentType, artistList } = useSelector(state => ({
    currentType: state.getIn(["artist", "currentType"]),
    artistList: state.getIn(["artist", "artistList"])
  }), shallowEqual)
  return (
    <ArtistListWrapper>
      <ZYThemeHeaderNormal title={currentType.name} />
      <ZYAlphaList />
      <div className="artist-list">
        {
          artistList.map((item, index) => {
            return <ZYArtistItem key={item.id} info={item} index={index} />
          })
        }
      </div>


    </ArtistListWrapper>
  )
})
