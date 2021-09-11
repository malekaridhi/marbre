import React from "react"
import { Route, Redirect } from "react-router-dom"

import { useSelector } from "react-redux"
export default function PrivateRoute({ component: Component, ...rest }) {
  const state = useSelector((state) => state);
  const { currentUser } = state.user

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}
