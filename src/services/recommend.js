import request from './request'

//请求推荐轮播图数据
export function getTopBanners() {
  return request({
    url: '/banner'
  })
}

//请求热门推荐数据
export function getHotRecommend(limit) {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
}

//请求新碟上架数据
export function getNewAlbum(limit) {
  return request({
    url: "/top/album",
    params: {
      limit
    }
  })
}

//请求排行榜数据

export function getTopList(idx) {
  return request({
    url: "/top/list",
    params: {
      idx
    }
  })
}

//请求入驻歌手数据
export function getArtistList(limit, cat) {
  return request({
    url: "/artist/list",
    params: {
      limit,
      cat
    }
  })
}

