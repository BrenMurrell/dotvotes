import React from 'react'
import { connect } from 'react-redux'

const IfAdministrator = (props) => {
  const isAdmin = props.auth.isAdmin === true
  return isAdmin
    ? <>{ props.children }</>
    : null
}

const IfAuthenticated = (props) => {
  const isAuth = props.auth.loggedIn === true
  return isAuth
    ? <>{ props.children }</>
    : null
}

const IfNotAuthenticated = (props) => {
  const isNotAuth = props.auth.loggedIn === false
  return isNotAuth
    ? <>{ props.children }</>
    : null
}

const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth
  }
}
export const IfAuth = connect(mapStateToProps)(IfAuthenticated)
export const IfNotAuth = connect(mapStateToProps)(IfNotAuthenticated)
export const IfAdmin = connect(mapStateToProps)(IfAdministrator)
