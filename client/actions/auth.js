import { fetchUsers } from '../apis/auth'
import { firebaseApp, authRef, github } from '../config/firebase'

export const SET_USERS = 'SET_USERS'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT = 'LOGOUT'

export function setUsers (users) {
  console.log('users in action to reducer', users)
  return {
    type: SET_USERS,
    users
  }
}

export function fetchUsersFromApi () {
  return dispatch => {
    return fetchUsers()
      .then(users => {
        console.log('users in action', users)
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
    // initially check local token
    // ---- add that code here
    // then:
    authRef.onAuthStateChanged(user => {
      if (user) {
        dispatch(logIn(user))
        // dispatch(authLoaded())
        // dispatch(fetchUserAlbums(user.uid))
      } else {
        dispatch(signOut())
        // dispatch(authLoaded())
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
        // dispatch(setToaster({
        //   type: 'normal',
        //   message: 'Logged in successfully.'
        // }))
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
