import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Container, Card } from '@bit/brenmurrell.asterisk-library.all'
import Avatar from './Avatar'

const Projects = (props) => {
  const [localProjects, setLocalProjects] = useState([])

  useEffect(() => {
    !props.filterProjects && setLocalProjects(props.projects)
    props.filterProjects && setLocalProjects(props.projects.filter(project => project.cohort_id === props.filterProjects))
  }, [props.projects])

  return (
    <>
      {!props.filterProjects && (
        <h2>All projects</h2>
      )}
      <Container columnCount="4">
        { localProjects.map(project => {
          return (
            <Card className="project-card" key={project.project_id} headerText={project.name}>
              <p>{project.description}</p>
              <div className="project-card__avatar">
                <Avatar memberId={project.lead_uid} />
              </div>
            </Card>
          )
        })}
        {!localProjects.length && (
          <p>No projects for this cohort</p>
        )}
      </Container>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    projects: globalState.projects
  }
}

export default connect(mapStateToProps)(Projects)
