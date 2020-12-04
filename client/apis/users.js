/* eslint-disable promise/no-nesting */
import request from 'superagent'

export const rootUrl = '/api/v1/users/'

export function fetchUsers () {
  return request.get(rootUrl)
    .then(res => {
      return res.body
    })
    .catch(err => {
      return err.message
    })
}

export const getUserId = (username) => {
  return request.get(`https://api.github.com/users/${username}`)
    .then(userObj => {
      console.log(userObj)
      return userObj.id
    })
}

export function insertUser (user) {
  return dispatch => {
    dispatch(getUserId(user.username))
      .then(userId => {
        user.uid = userId
        return request.post(rootUrl)
          .send(user)
          .then(res => {
            return res.body
          })
      })
      .catch(err => {
        return err.message
      })
  }
}
