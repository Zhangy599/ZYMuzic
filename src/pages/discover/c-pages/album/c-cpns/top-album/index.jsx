import React, { memo, useEffect, useState } from 'react'

import ZYThemeHeaderNormal from '@/components/theme-header-normal'
import { TopAlbumWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTopAlbumsAction } from '../../store/actionCreators'

import ZYAlbumCover from '@/components/album-cover'
import ZYPagination from '@/components/pagination'

export default memo(function ZYTopAlbum() {
  const [currentPage, setCurrentPage] = useState(1)
  const dispatch = useDispatch()
  const { topAlbums, topTotal } = useSelector(state => ({
    topAlbums: state.getIn(["album", "topAlbums"]),
    topTotal: state.getIn(["album", "topTotal"])
  }), shallowEqual)
  useEffect(() => {
    dispatch(getTopAlbumsAction(1))
  }, [dispatch])
  const onPageChange = (page) => {
    setCurrentPage(page)
    dispatch(getTopAlbumsAction(page))
  }
  return (
    <TopAlbumWrapper>
      <ZYThemeHeaderNormal title="全部新碟" />
      <div className="album-list">
        {
          topAlbums.map(item => {
            return <ZYAlbumCover size={130}
              width={153}
              bgp={"-845px"}
              key={item.id}
              info={item} />
          })
        }
      </div>
      <ZYPagination total={topTotal}
        currentPage={currentPage}
        onPageChange={onPageChange}
        pageSize={30} />
    </TopAlbumWrapper>
  )
})
