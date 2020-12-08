import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addAnyUser } from '../actions/auth'
import Avatar from './Avatar'

const Cohort = (props) => {
  const [cohort, setCohort] = useState(props.match.params.cohort)
  const [cohortUsers, setCohortUsers] = useState([])

  const [newUser, setNewUser] = useState({
    username: '',
    cohort: cohort
  })

  const onUserNameChange = e => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    })
  }

  const submitForm = e => {
    e.preventDefault()
    props.dispatch(addAnyUser(newUser))
    setNewUser({
      ...newUser,
      username: ''
    })
  }

  useEffect(() => {
    setCohort(props.match.params.cohort)
    setCohortUsers(props.users.filter(user => user.cohort === cohort))
  }, [props.users, props.match, cohort])

  useEffect(() => {
    setNewUser({
      ...newUser,
      cohort: cohort
    })
  }, [cohort])

  return (
    <>
      <div className="avatars avatars--compact">
        {cohortUsers.map(user => (
          <Avatar user={user} key={user.uid} />
        ))}
      </div>
      <div className="avatars avatars--vertical">
        {cohortUsers.map(user => (
          <Avatar showName user={user} key={user.uid} />
        ))}
      </div>
      <p>{cohortUsers.length}</p>
      <form onSubmit={submitForm}>
        <input type="text" name="username" value={newUser.username} onChange={onUserNameChange} />
        <button>submit</button>
      </form>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    users: globalState.users
  }
}

export default connect(mapStateToProps)(Cohort)
