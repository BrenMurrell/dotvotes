import React from 'react'
import { connect } from 'react-redux'

const Projects = (props) => {
  return (
    <></>
  )
}
const mapStateToProps = (globalState) => {
  return {
    projects: globalState.projects
  }
}

export default connect(mapStateToProps)(Projects)
