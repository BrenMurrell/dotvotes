import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Avatar from './Avatar'
import Projects from './Projects'

const Cohort = (props) => {
  const [cohort, setCohort] = useState({})
  const [newUser, setNewUser] = useState({
    username: '',
    cohort: ''
  })

  useEffect(() => {
    const cohortArray = props.cohorts.filter(cohort => cohort.id === props.match.params.cohort)
    setCohort(cohortArray[0])
  }, [props.cohorts])

  const submitForm = e => {
    e.preventDefault()
    // props.dispatch(addAnyUser(newUser))
    // setNewUser({
    //   ...newUser,
    //   username: ''
    // })
  }

  const onFieldChange = e => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      { cohort && (
        <>
          <h2>{cohort.display_name}</h2>
          <h3>Members</h3>
          <div className="avatars avatars--compact">
            {cohort.members && (
              cohort.members.map(member => {
                return <Avatar key={member} memberId={member} />
              })
            )}
          </div>
          <form onSubmit={submitForm}>
            <label
              htmlFor="username">
              Username (from github)
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={newUser.username}
              onChange={onFieldChange} />
            <button>submit</button>
          </form>
          <h3>Projects</h3>
          <Projects filterProjects={props.match.params.cohort} />
        </>
      )}
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    cohorts: globalState.cohorts,
    users: globalState.users
  }
}

export default connect(mapStateToProps)(Cohort)
