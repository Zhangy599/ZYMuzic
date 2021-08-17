import React, { memo } from 'react'
import { dicoverMenu } from '@/common/local-data'
import {renderRoutes} from 'react-router-config'



import { NavLink } from 'react-router-dom'

import {
  DiscoverWrapper,
  TopMenu
} from './style'



export default memo(function ZYDiscover(props) {
  
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {
            dicoverMenu.map(item=>{
              return (
                <div key={item.title} className="item">
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
      {renderRoutes(props.route.routes)}
    </DiscoverWrapper>
  )
})
