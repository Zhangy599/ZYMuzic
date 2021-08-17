import React, { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const ZYDiscover = lazy(()=>import("@/pages/discover"))
const ZYMine = lazy(()=>import("@/pages/mine"))
const ZYFriend = lazy(()=>import("@/pages/friend"))
const ZYRecommend = lazy(()=>import("@/pages/discover/c-pages/recommend"))
const ZYRanking = lazy(()=>import("@/pages/discover/c-pages/ranking"))
const ZYSongs = lazy(()=>import("@/pages/discover/c-pages/songs"))
const ZYDjradio = lazy(()=>import("@/pages/discover/c-pages/djradio"))
const ZYArtist = lazy(()=>import("@/pages/discover/c-pages/artist"))
const ZYAlbum = lazy(()=>import("@/pages/discover/c-pages/album"))
const ZYPlayer = lazy(()=>import("@/pages/player"))



const routes = [
  {
    path: '/',
    exact: true,
    render: () => (
      <Redirect to='/discover' />
    )
  },
  {
    path: '/discover',
    component: ZYDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend" />
        )
      },
      {
        path: '/discover/recommend',
        component: ZYRecommend
      },
      {
        path: '/discover/ranking',
        component: ZYRanking
      },
      {
        path: '/discover/songs',
        component: ZYSongs
      },
      {
        path: '/discover/djradio',
        component: ZYDjradio
      },
      {
        path: '/discover/artist',
        component: ZYArtist
      },
      {
        path: '/discover/album',
        component: ZYAlbum
      },
      {
        path: "/discover/player",
        component: ZYPlayer
      }
    ]
  },
  {
    path: '/my',
    component: ZYMine
  },
  {
    path: '/friend',
    component: ZYFriend
  }
]

export default routes