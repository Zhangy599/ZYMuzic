import request from './request'

export function getTopList() {
  return request({
    url: "/topList"
  })
}

export function getRankingList(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}