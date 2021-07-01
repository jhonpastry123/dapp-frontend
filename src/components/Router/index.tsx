import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import ViewContainer from 'components/ViewContainer/index'
import { useAuth } from 'state/hooks'
import { isEmpty } from "utils/form-validation";

export const PrivateRoute = ({ children, admin = false, ...rest }) => {
  const { isAuthenticated, userRole } = useAuth()
 const token= localStorage.getItem("auth_token");
  if (admin && userRole !== 'admin') {
    return <Redirect to="/login" />
  }
  return (
    <>
      {!isEmpty(token)||isAuthenticated ? (
        <Route {...rest}>
          <ViewContainer>{children}</ViewContainer>
        </Route>
      ):<Redirect to="/login" />}
    </>
  )
}

export const CommonRouter = ({ children, ...rest }) => {
  return <Route {...rest}>{children}</Route>
}
