import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'
import {
  getRadioCategories,
  changeCurrentIdAction
} from '../../store/actionCreators'
import classNames from 'classnames'

import { Carousel } from 'antd'

import {
  CategoryWrapper,
  CategoryContent,
  CategoryItemImage
} from './style'

const PAGE_SIZE = 16;
export default memo(function ZYRadioCategory() {
  const { categories, currentId } = useSelector(state => ({
    categories: state.getIn(["djradio", "categories"]),
    currentId: state.getIn(["djradio", "currentId"])
  }), shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRadioCategories())
  }, [dispatch])
  const carouselRef = useRef()
  const page = Math.ceil(categories.length / PAGE_SIZE) || 1
  function getSize(index) {
    return PAGE_SIZE * index > categories.length ? PAGE_SIZE * index : categories.length
  }
  return (
    <CategoryWrapper>
      <div className="arrow arrow-left" onClick={_ => carouselRef.current.prev()}></div>
      <CategoryContent>
        <Carousel dots={{ className: "dots" }} ref={carouselRef}>
          {
            Array(page).fill(0).map((_, index) => {
              return (
                <div key={index} className="category-page">
                  {
                    categories.slice(index * PAGE_SIZE, getSize(index + 1)).map((item, indey) => {
                      return (<div key={item.id}
                        className={classNames("category-item", { "active": item.id === currentId })}
                        onClick={_=>dispatch(changeCurrentIdAction(item.id))}
                      >
                        <CategoryItemImage className="image" imgUrl={item.picWebUrl}></CategoryItemImage>
                        <span>{item.name}</span>
                      </div>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </Carousel>
      </CategoryContent>
      <div className="arrow arrow-right" onClick={_ => carouselRef.current.next()}></div>
    </CategoryWrapper>
  )
})
