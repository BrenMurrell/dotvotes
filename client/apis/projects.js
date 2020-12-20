import request from 'superagent'

export const rootUrl = '/api/v1/projects/'

export const fetchProjects = (token) => {
  return request.get(rootUrl)
    .auth(token, { type: 'bearer' })
    .then(res => {
      return res.body
    })
    .catch(err => {
      return err.message
    })
}
