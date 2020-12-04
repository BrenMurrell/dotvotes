import React from 'react'
import { connect } from 'react-redux'

const IfNotAuth = (props) => {
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

export default connect(mapStateToProps)(IfNotAuth)
