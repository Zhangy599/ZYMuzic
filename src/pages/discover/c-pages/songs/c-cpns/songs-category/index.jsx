import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import {CategoryWrapper} from './style'

import {
  getSongList,
  changeCurrentCategoryAction
} from '../../store/actionCreators'

export default memo(function ZYSongsCategory() {
  const { category } = useSelector(state => ({
    category: state.getIn(["songs", "category"])
  }), shallowEqual)
  const dispatch = useDispatch()
  const selectCategory = (name)=>{
    dispatch(changeCurrentCategoryAction(name))
    dispatch(getSongList(0))
  }
  return (
    <CategoryWrapper>
       <div className="arrow sprite_icon"></div>
       <div className="all">
        <span className="link" onClick={e => selectCategory("全部")}>全部风格</span>
      </div>
      <div className="category">
        {
          category.map((item,index)=>{
            return (
              <dl key={item.name} className={"item" + index}>
                <dt>
                  <i className="icon sprite_icon2"></i>
                  <span>{item.name}</span>
                </dt>
                <dd>
                  {
                    item.subs.map(sItem => {
                      return (
                        <div className="item" key={sItem.name}>
                          <span className="link" onClick={e => selectCategory(sItem.name)}>{sItem.name}</span>
                          <span className="divider">|</span>
                        </div>
                      )
                    })
                  }
                </dd>
              </dl>
            )
          })
        }
      </div>
    </CategoryWrapper>
  )
})
