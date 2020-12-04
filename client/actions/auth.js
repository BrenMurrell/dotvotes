import { fetchUsers, insertUser } from '../apis/users'
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

export const addUser = (user) => {
  return {
    type: ADDED_USER,
    user
  }
}

export const addUserWithAPI = (user) => dispatch => {
  // console.log(user)
  user.uid = 'test'
  return insertUser(user)
  // .then(res => {
  //   dispatch(addUser(user))
  //   return res.body
  // })
}
