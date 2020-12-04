import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUser, fetchUsersFromApi, logInWithGithub, signOut } from '../actions/auth'
import { IfAuth, IfNotAuth, IfAdmin } from './auth/Auth'

const App = (props) => {
  useEffect(() => {
    props.dispatch(fetchUsersFromApi())
    props.dispatch(fetchUser())
  }, [])

  return (
    <div className='app'>
      <h1>.votes</h1>
      <ul>
        { props.users.map(user => (
          <li key={user.username}>{user.username}</li>
        ))}
      </ul>
      <IfNotAuth>
        <button onClick={() => props.dispatch(logInWithGithub())}>Log in</button>
      </IfNotAuth>
      <IfAuth>
        <p>I am {props.auth.user.displayName}</p>
        <IfAdmin>
          <p>I am an admin</p>
        </IfAdmin>
        <button onClick={() => props.dispatch(signOut())}>Log Out</button>
      </IfAuth>
    </div>
  )
}

function mapStateToProps (globalState) {
  return {
    auth: globalState.auth,
    users: globalState.users
  }
}

export default connect(mapStateToProps)(App)
