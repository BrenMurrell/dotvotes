import React from 'react'
import { connect } from 'react-redux'
import { IfAdmin, IfNotAuth, IfAuth } from './auth/Auth'
import { logInWithGithub, signOut } from '../actions/auth'

const UserControls = (props) => {
  return (
    <>
      <IfNotAuth>
        <button onClick={() => props.dispatch(logInWithGithub())}>Log in</button>
      </IfNotAuth>
      <IfAuth>
        <div className="user-block">
          <img className="user-block__image" src={`${props.auth.user.photoURL}&s=40`} />
          <div className="user-block__text">
            <p>I am {props.auth.user.displayName}</p>
            {/* https://api.github.com/user/978514 <--- includes username here */}
            <IfAdmin>
              <p>I am an admin</p>
            </IfAdmin>
          </div>
        </div>
        <button onClick={() => props.dispatch(signOut())}>Log Out</button>
      </IfAuth>
    </>
  )
}

const ms2p = (globalState) => {
  return {
    auth: globalState.auth
  }
}

export default connect(ms2p)(UserControls)
