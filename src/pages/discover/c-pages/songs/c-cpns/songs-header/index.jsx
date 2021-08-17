import React, { memo } from 'react'
import { useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import ZYSongsCategory from '../songs-category'

import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style'


export default memo(function ZYSongsHeader() {
  const [showCategory, setShowCategory] = useState(false)
  const { currentCategory } = useSelector(state => ({
    currentCategory: state.getIn(["songs", "currentCategory"])
  }), shallowEqual)
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <span className="title">{currentCategory}</span>
        <button className="select" onClick={_=>setShowCategory(!showCategory)}>
          <span>选择分类</span>
          <i className="sprite_icon2"></i>
        </button>
        {
          showCategory ? <ZYSongsCategory /> : null
        }
      </HeaderLeft>
      <HeaderRight>
        <button className="hot">热门</button>
      </HeaderRight>
    </HeaderWrapper>
  )
})
