import request from 'superagent'

export const rootUrl = '/api/v1/auth/'

export function fetchUsers () {
  return request.get(rootUrl)
    .then(res => {
      console.log(res.body)
      return res.body
    })
    .catch(err => {
      return err.message
    })
}
