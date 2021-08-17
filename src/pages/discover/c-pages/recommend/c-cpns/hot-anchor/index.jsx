import React, { memo } from 'react'

import ZYThemeHeaderSmall from "@/components/theme-header-small"

import {hotRadios} from '@/common/local-data'

import { HotRadioWrapper } from './style'

export default memo(function ZYHotAnchor() {
  return (
    <HotRadioWrapper>
      <ZYThemeHeaderSmall title="热门主播" />
      <div className="radio-list">
        {
          hotRadios.map((item, index) => {
            return (
              <div className="item" key={item.picUrl}>
                <a href="/abc" className="image">
                  <img src={item.picUrl} alt="" />
                </a>
                <div className="info">
                  <a href="/abc" className="name">{item.name}</a>
                  <div className="position text-nowrap">{item.position}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </HotRadioWrapper>
  )
})
