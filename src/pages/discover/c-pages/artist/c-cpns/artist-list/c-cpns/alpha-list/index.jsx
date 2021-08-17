import React, { memo, useEffect, useState } from 'react'

import { singerAlphas } from '@/utils/handle-data';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { AlphaListWrapper } from './style'
import { getArtistListAction } from '../../../../store/actionCreators'
import classNames from 'classnames';

export default memo(function ZYAlphaList() {
  const [currentAlpha, setCurrentAlpha] = useState("-1")
  const { currentArea, currentType } = useSelector(state => ({
    currentArea: state.getIn(["artist", "currentArea"]),
    currentType: state.getIn(["artist", "currentType"])
  }), shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    setCurrentAlpha("-1")
  }, [currentType, currentArea])
  useEffect(() => {
    dispatch(getArtistListAction(currentArea, currentType.type, currentAlpha));
  }, [currentAlpha, currentType, currentArea, dispatch]);
  return (
    <AlphaListWrapper hasTop={currentArea !== -1}>
      {
        currentArea !== -1 && singerAlphas.map(item => {
          const isActive = currentAlpha === item
          if (item === "0") item = "其他";
          if (item === "-1") item = "热门";
          return (
            <div key={item}
              className={classNames("item", { "active": isActive })}>
              <span onClick={e => setCurrentAlpha(item)}>{item.toUpperCase()}</span>
            </div>
          )
        })
      }
    </AlphaListWrapper>
  )
})
