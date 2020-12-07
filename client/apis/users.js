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

export const getUserFromGithub = (username) => {
  return request.get(`https://api.github.com/users/${username}`)
    .then(userObj => {
      console.log('api found: ', userObj)
      return userObj.body
    })
}

export const fetchUserByUsername = (username) => {
  return request.get(`${rootUrl}username/${username}`)
    .then(user => {
      return user.text
    })
    .catch(err => {
      return err.message
    })
}

export function insertUser (user, token) {
  return dispatch => {
    return request.post(rootUrl)
      .send({ user: user, token: token })
      .then(res => {
        return res.body
      })
      .catch(err => {
        return err.message
      })
  }
}
