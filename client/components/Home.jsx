import React from 'react'
import { connect } from 'react-redux'

const Home = (props) => {
  return (
    <>
      <h1>Hi and welcome to .votes (dotvotes)</h1>
      <p>This project aims to build a dot voting system for end of cohort projects</p>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth
  }
}

export default connect(mapStateToProps)(Home)
