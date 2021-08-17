import React, { memo, useState } from 'react'

import SongsCover from '@/components/songs-cover'
import ZYPagination from '@/components/pagination'
import { SongsListWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { PER_PAGE_NUMBER } from '../../store/constants'
import { getSongList } from '../../store/actionCreators'

export default memo(function ZYSongsList() {
  const [currentPage, setCurrentPage] = useState(1)
  const { categorySongs } = useSelector(state => ({
    categorySongs: state.getIn(["songs", "categorySongs"])
  }),shallowEqual)
  const dispatch = useDispatch()
  const songList = categorySongs.playlists || []
  const total = categorySongs.total || 0
  const onPageChange = page => {
    setCurrentPage(page)
    dispatch(getSongList(page))
    window.scrollTo(0,0)
  }
  return (
    <SongsListWrapper>
      <div className="songs-list">
        {
          songList.map(item => {
            return (
              <SongsCover key={item.id} info={item} right="30px" />
            )
          })
        }
      </div>
      <ZYPagination total={total}
        currentPage={currentPage}
        pageSize={PER_PAGE_NUMBER}
        onPageChange={onPageChange} />
    </SongsListWrapper>
  )
})
