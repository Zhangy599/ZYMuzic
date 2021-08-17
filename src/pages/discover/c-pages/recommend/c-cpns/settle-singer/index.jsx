import React, { memo, useEffect } from 'react'

import ZYThemeHeaderSmall from '@/components/theme-header-small'
import { SetterSongerWrapper } from './style'
import { getSettleSingsAction } from '../../store/actionCreators'
import { useDispatch, useSelector } from 'react-redux'

import { getSizeImage } from '@/utils/data-format'


export default memo(function ZYSettleSinger() {
  const dispatch = useDispatch()
  const { settleSings } = useSelector(state => ({
    settleSings: state.getIn(["recommend", "settleSings"])
  }))
  useEffect(() => {
    dispatch(getSettleSingsAction(5, 5001))
  }, [dispatch])
  return (
    <SetterSongerWrapper>
      <ZYThemeHeaderSmall title="入驻歌手" more="查看全部>" />
      <div className="singer-list">
        {
          settleSings.map((item, index) => {
            return (
              <a href="/#" className="item" key={item.id}>
                <img src={getSizeImage(item.img1v1Url, 62)} alt="" />
                <div className="info">
                  <div className="title">{item.alias.join("") || item.name}</div>
                  <div className="name">{item.name}</div>
                </div>
              </a>
            )
          })
        }
      </div>
      <div className="apply-for">
        <a href="/abc">申请成为网易音乐人</a>
      </div>
    </SetterSongerWrapper>
  )
})
