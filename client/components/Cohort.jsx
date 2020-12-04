import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addUserWithAPI } from '../actions/auth'

const Cohort = (props) => {
  const cohort = props.match.params.cohort
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
    props.dispatch(addUserWithAPI(newUser))
  }

  useEffect(() => {
    setCohortUsers(props.users.filter(user => user.cohort === cohort))
  }, [props.users])

  return (
    <>
      {cohortUsers.map(user => (
        <p key={user.uid}>{user.username} - { user.cohort }</p>
      ))}
      <form onSubmit={submitForm}>
        <input type="text" name="username" onChange={onUserNameChange} />
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