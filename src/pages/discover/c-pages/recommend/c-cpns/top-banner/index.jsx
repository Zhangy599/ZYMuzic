import React, { memo, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTopBannerAction } from '../../store/actionCreators'


import { Carousel } from 'antd'


import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style'
import { useCallback } from 'react'



export default memo(function ZYTopBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)
  //组件和redux关联：获取数据和进行操作
  const dispatch = useDispatch(() => { })

  const { topBanners } = useSelector(state => ({
    topBanners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual)

  //其他hook
  const bannerRef = useRef()
  useEffect(() => {
    //获取轮播图数据
    dispatch(getTopBannerAction())
  }, [dispatch])
  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to)
  }, [])
  //其他业务逻辑
  const bgImage = topBanners[currentIndex] && ( topBanners[currentIndex].imageUrl +"?imageView&blur=40x20" )
  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
            {
              topBanners.map(item => {
                return (
                  <div key={item.imageUrl} className="banner-item">
                    <img src={item.imageUrl} className="image" alt={item.typeTitle} />
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={_ => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={_ => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
