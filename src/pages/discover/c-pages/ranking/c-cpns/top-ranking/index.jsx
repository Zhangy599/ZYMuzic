import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import classNames from 'classnames'

import { TopRankingWrapper } from './style'

import { changeCurrentIndex, getRaking } from '../../store/actionCreators'

export default memo(function ZYTopRanking() {
  const dispatch = useDispatch()
  const { topList, currentIndex } = useSelector(state => ({
    topList: state.getIn(["ranking", "topList"]),
    currentIndex: state.getIn(["ranking", "currentIndex"])
  }), shallowEqual)
  useEffect(() => {
    const id = (topList[currentIndex] && topList[currentIndex].id)
    if (!id) return
    dispatch(getRaking(id))
  }, [dispatch, currentIndex, topList])

  const handleItemClick = index => {
    dispatch(changeCurrentIndex(index))
  }
  return (
    <TopRankingWrapper>
      {
        topList.map((item, index) => {
          let header
          if (index === 0 || index === 4) {
            header = <div className="header">{index === 0 ? "云音乐特色榜" : "全球媒体榜"}</div>
          }
          return (
            <div key={item.id}>
              {header}
              <div className={classNames("item", { "active": index === currentIndex })}
                onClick={() => handleItemClick(index)}>
                <img src={item.coverImgUrl} alt="" />
                <div className="info">
                  <p className="name">{item.name}</p>
                  <p className="update">{item.updateFrequency}</p>
                </div>
              </div>

            </div>
          )
        })
      }
    </TopRankingWrapper>
  )
})
