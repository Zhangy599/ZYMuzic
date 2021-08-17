import React, { memo } from 'react'

import { artistCategories } from '@/common/local-data'

import classNames from 'classnames'

import {
  ArtistCategoryWrapper,
  CategoryItem
} from './style'

import {
  changeCurrentAreaAction,
  changeCurrentTypeAction
} from '../../store/actionCreators'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
export default memo(function ZYAttistCategory() {
  const { currentArea, currentType } = useSelector(state => ({
    currentArea: state.getIn(["artist", "currentArea"]),
    currentType: state.getIn(["artist", "currentType"])
  }), shallowEqual)
  const dispatch = useDispatch()
  const selectArtist = (area, type) => {
    dispatch(changeCurrentTypeAction(type))
    dispatch(changeCurrentAreaAction(area))
  }
  const renderArtist = (artist, area) => {
    return (
      <div>
        {
          artist.map(item => {
            return (
              <CategoryItem key={item.type}
                className={classNames({ "active":currentArea === area && currentType.type === item.type})}>
                <span onClick={_ => selectArtist(area, item)}>{item.name}</span>
              </CategoryItem>
            )
          })
        }
      </div>
    )
  }
  return (
    <ArtistCategoryWrapper>
      {
        artistCategories.map(item => {
          return (
            <div className="section" key={item.area}>
              <h2 className="title">{item.title}</h2>
              {
                renderArtist(item.artists, item.area)
              }
            </div>
          )
        })
      }

    </ArtistCategoryWrapper>
  )
})
