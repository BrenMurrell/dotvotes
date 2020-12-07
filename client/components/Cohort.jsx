import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addAnyUser } from '../actions/auth'
import Avatar from './Avatar'

const Cohort = (props) => {
  const cohort = props.match.params.cohort
  const [cohortUsers, setCohortUsers] = useState([])

  const [newUser, setNewUser] = useState({
    username: 'Htense',
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
  }

  useEffect(() => {
    setCohortUsers(props.users.filter(user => user.cohort === cohort))
  }, [props.users, props.match])

  return (
    <>
      <div className="avatars avatars--compact">
        {cohortUsers.map(user => (
          <Avatar user={user} key={user.uid} />
        ))}
      </div>
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
