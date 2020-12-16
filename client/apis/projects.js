import request from 'superagent'

export const rootUrl = '/api/v1/projects/'

export function fetchProjects () {
  return request.get(rootUrl)
    .then(res => {
      return res.body
    })
    .catch(err => {
      return err.message
    })
}
