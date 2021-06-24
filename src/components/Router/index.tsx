import React from 'react'
import SuspenseWithChunkError from 'components/SuspenseWithChunkError'
import PageLoader from 'components/PageLoader'
import { Route, Redirect } from 'react-router-dom'
import ViewContainer from 'components/ViewContainer/index'
import { useAuth } from 'state/hooks'

export const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = useAuth()

  return (
    <Route {...rest}>{isAuthenticated ? <ViewContainer>{children}</ViewContainer> : <Redirect to="/login" />}</Route>
  )
}

export const CommonRouter = ({ children, ...rest }) => {
  return (
    <Route {...rest}>
      <SuspenseWithChunkError fallback={<PageLoader />}>{children}</SuspenseWithChunkError>
    </Route>
  )
}
