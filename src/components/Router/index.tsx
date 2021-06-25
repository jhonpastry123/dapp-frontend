import React from 'react'
import SuspenseWithChunkError from 'components/SuspenseWithChunkError'
import PageLoader from 'components/PageLoader'
import { Route, Redirect } from 'react-router-dom'
import ViewContainer from 'components/ViewContainer/index'
import { useAuth } from 'state/hooks'
import { isEmpty } from 'utils/form-validation'

export const PrivateRoute = ({ children, admin = false, ...rest }) => {
  const { isAuthenticated, userRole } = useAuth()
  const localState = isEmpty(localStorage.getItem('auth_token'))
  if (admin && userRole !== 'admin') {
    return (
      <Route {...rest}>
        <Redirect to="/" />
      </Route>
    )
  }
  return (
    <Route {...rest}>
      {isAuthenticated || !localState ? <ViewContainer>{children}</ViewContainer> : <Redirect to="/login" />}
    </Route>
  )
}

export const CommonRouter = ({ children, ...rest }) => {
  return (
    <Route {...rest}>
      <SuspenseWithChunkError fallback={<PageLoader />}>{children}</SuspenseWithChunkError>
    </Route>
  )
}
