import React, { memo, Suspense } from 'react'
import { renderRoutes } from 'react-router-config'

import routes from './router'

import { Provider } from 'react-redux'

import store from './store'


import {
  HashRouter
} from 'react-router-dom'



import ZYAppHeader from 'components/app-header'
import ZYAppFooter from 'components/app-footer'
import ZYAppPlayerBar from '@/pages/player/app-player-bar'

export default memo(function App() {
  return (

    <Provider store={store}>
      <HashRouter>
        <Suspense fallback={<div>page loading </div>}>
          <ZYAppHeader />
          {renderRoutes(routes)}
          <ZYAppFooter />
        </Suspense>
        <ZYAppPlayerBar />
      </HashRouter>
    </Provider>
  )
})
