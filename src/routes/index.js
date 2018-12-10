import React from 'react'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import loadable from '@loadable/component'

import Loading from 'components/Common/Loading'

const Dashboard = loadable(() => import('../containers/Dashboard'), {
  fallback: <Loading />
})

const Home = loadable(() => import('../containers/Home'), {
  fallback: <Loading />
})

const User = loadable(() => import('../containers/User'), {
  fallback: <Loading />
})

export default history => {
  return (
    <ConnectedRouter history={history}>
      <Dashboard history={history}>
        <Route
          component={Home}
          exact
          path='/'
          strict />
        <Route
          component={User}
          exact
          path='/user'
          strict />
      </Dashboard>
    </ConnectedRouter>
  )
}
