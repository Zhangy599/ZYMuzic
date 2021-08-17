import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  currentSong: [],
  playList: [
    {
      "name": "理想",
      "id": 29567189,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 6731,
          "name": "赵雷",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": null,
      "fee": 8,
      "v": 39,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 3048030,
        "name": "吉姆餐厅",
        "picUrl": "https://p1.music.126.net/PJNV84mjt_mDXEkxtjzB4w==/18957779486268444.jpg",
        "tns": [],
        "pic_str": "18957779486268444",
        "pic": 18957779486268444
      },
      "dt": 313906,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 12558672,
        "vd": -11500
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 7535221,
        "vd": -8900
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 5023495,
        "vd": -7200
      },
      "a": null,
      "cd": "1",
      "no": 5,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 2,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 1,
      "originSongSimpleData": null,
      "resourceState": true,
      "single": 0,
      "noCopyrightRcmd": null,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 1400821,
      "mv": 380064,
      "publishTime": 1413648000007
    },

    {
      "name": "成都",
      "id": 436514312,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 6731,
          "name": "赵雷",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": null,
      "fee": 8,
      "v": 46,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 34930257,
        "name": "成都",
        "picUrl": "https://p1.music.126.net/34YW1QtKxJ_3YnX9ZzKhzw==/2946691234868155.jpg",
        "tns": [],
        "pic": 2946691234868155
      },
      "dt": 328362,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 13137546,
        "vd": -49995
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 7882545,
        "vd": -47364
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 5255044,
        "vd": -45631
      },
      "a": null,
      "cd": "1",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 2,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 1,
      "originSongSimpleData": null,
      "resourceState": true,
      "single": 0,
      "noCopyrightRcmd": null,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 1400821,
      "mv": 5619601,
      "publishTime": 1477238400007
    },
    {
      "name": "余香",
      "id": 487885426,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 12002056,
          "name": "张小九",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": null,
      "fee": 8,
      "v": 66,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 35691684,
        "name": "余香",
        "picUrl": "https://p1.music.126.net/LNN2f6W5_s6GFQs-l3gnaw==/109951165221750422.jpg",
        "tns": [],
        "pic_str": "109951165221750422",
        "pic": 109951165221750420
      },
      "dt": 246019,
      "h": {
        "br": 320001,
        "fid": 0,
        "size": 9842982,
        "vd": -8202
      },
      "m": {
        "br": 192001,
        "fid": 0,
        "size": 5905807,
        "vd": -5640
      },
      "l": {
        "br": 128001,
        "fid": 0,
        "size": 3937219,
        "vd": -4176
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 2,
      "s_id": 0,
      "mark": 8256,
      "originCoverType": 1,
      "originSongSimpleData": null,
      "resourceState": true,
      "single": 0,
      "noCopyrightRcmd": null,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": -1,
      "mv": 0,
      "publishTime": 1498924833914
    }
  ],
  currentSongIndex: 0,
  sequence: 0, //0  循环  1随机 2单曲循环
  lyricList: [],
  currentLyricIndex:0
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong)
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList)
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.index)
    case actionTypes.CHANGE_SEQUENCE:
      return state.set("sequence", action.sequence)
    case actionTypes.CHANGE_LYRIC_LIST:
      return state.set("lyricList", action.lyricList)
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set("currentLyricIndex",action.index)
    default:
      return state
  }
}

export default reducer