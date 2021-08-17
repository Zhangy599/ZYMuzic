import React, { memo } from 'react'
import { headerLinks } from '@/common/local-data'
import { Input } from 'antd'

import { SearchOutlined } from '@ant-design/icons'

import { NavLink } from 'react-router-dom'

import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style'



export default memo(function ZYAppHeader() {

  //页面代码
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }

  //jsx代码
  return (
    <HeaderWrapper >
      <div className="content wrap-v1">
        {/* 顶部导航栏左侧内容 */}
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">网易云音乐</a>
          <div className="select-list">
            {
              headerLinks.map((item, index) => {
                return <div key={item.title} className="select-item">
                  {showSelectItem(item, index)}
                </div>
              })
            }
          </div>
          {/* <NavLink to="/">发现音乐</NavLink>
          <NavLink to="/my">我的</NavLink>
          <NavLink to="/friend">朋友</NavLink> */}
        </HeaderLeft>
        {/* 顶部导航栏右侧内容 */}
        <HeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          <div className="center">创作者中心</div>
          <a href="#/">登录</a>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
