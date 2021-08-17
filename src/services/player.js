import request from './request'

//获取歌曲信息
export function getSongDetail(ids) {
  return request({
    url: "/song/detail",
    params: {
      ids
    }
  })
}

//获取歌词信息
export function getLyric(id){
  return request({
    url:'/lyric',
    params:{
      id
    }
  })
}