import React from 'react'
import { connect } from 'react-redux'

// import { isAuthenticated } from 'authenticare/client'

const IfAdmin = (props) => {
  const isAdmin = props.auth.isAdmin === true
  return isAdmin
    ? <>{ props.children }</>
    : null
}

const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth
  }
}

export default connect(mapStateToProps)(IfAdmin)
