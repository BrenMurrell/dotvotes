import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

const Projects = (props) => {
  const [localProjects, setLocalProjects] = useState([])

  useEffect(() => {
    !props.filterProjects && setLocalProjects(props.projects)
    props.filterProjects && setLocalProjects(props.projects.filter(project => project.cohort_id === props.filterProjects))
  }, [props.projects])

  return (
    <>
      { localProjects.map(project => {
        return <p key={project.project_id}>{project.name}</p>
      })}
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    projects: globalState.projects
  }
}

export default connect(mapStateToProps)(Projects)
