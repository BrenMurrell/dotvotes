/* eslint-disable promise/no-nesting */
import { fetchUsers, fetchUserByUsername, getUserFromGithub, insertUser } from '../apis/users'
import { firebaseApp, authRef, github } from '../config/firebase'

export const SET_USERS = 'SET_USERS'
export const ADDED_USER = 'ADDED_USER'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT = 'LOGOUT'

export function setUsers (users) {
  return {
    type: SET_USERS,
    users
  }
}

export function fetchUsersFromApi () {
  return dispatch => {
    return fetchUsers()
      .then(users => {
        dispatch(setUsers(users))
        return null
      })
  }
}

export const logIn = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user
  }
}

export const fetchUser = () => {
  return dispatch => {
    authRef.onAuthStateChanged(user => {
      if (user) {
        dispatch(logIn(user))
      } else {
        dispatch(signOut())
      }
    })
  }
}

export const logOut = () => {
  return {
    type: LOGOUT
  }
}

export const logInWithGithub = () => {
  return dispatch => {
    return firebaseApp.auth().signInWithPopup(github)
      .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // var token = result.credential.accessToken
        var user = result.user
        dispatch(logIn(user))
        return null
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}

export const signOut = () => dispatch => {
  firebaseApp.auth().signOut()
    .then(result => {
      dispatch(logOut())
      return null
    })
    .catch(error => {
      console.log(error.message)
    })
}

export const addUser = (user) => {
  return {
    type: ADDED_USER,
    user
  }
}

export const userExists = (username) => {
  return fetchUserByUsername(username)
    .then(user => {
      return user
    })
    .catch(err => {
      console.log(err.message)
      return null
    })
}

export const addAnyUser = (user) => dispatch => {
  return userExists(user.username)
    .then(userFromDb => {
      if (userFromDb) {
        console.log('already have that user')
        // add them to the cohort
        return null
      } else {
        console.log('no user :(')
        console.log('sending username to github: ', user.username)
        return getUserFromGithub(user.username)
          .then(githubUser => {
            console.log('user returned to action', githubUser)
            // return githubUser.body
            const newUser = {
              uid: githubUser.id,
              username: githubUser.login,
              cohort: user.cohort
            }
            return dispatch(insertUser(newUser))
              .then(res => {
                return dispatch(fetchUsersFromApi())
              })
          })
      }
    })
    .catch(err => {
      console.log('error: ', err.message, err)
    })
}

export const addNewUser = (user) => dispatch => {
  // add to users table,
  return firebaseApp.auth().currentUser.getIdToken()
    .then(token => {
      console.log(user, token)
      return null
    })
    .catch(err => {
      console.log(err.message)
    })
  // then use the ID that comes back to add to the cohort_users table

  // then refresh the globalState
}
