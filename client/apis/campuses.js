/* eslint-disable promise/no-nesting */
import request from 'superagent'

export const rootUrl = '/api/v1/campuses/'

export function fetchCampuses () {
  return request.get(rootUrl)
    .then(res => {
      return res.body
    })
    .catch(err => {
      return err.message
    })
}
