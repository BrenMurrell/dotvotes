import { fetchCampuses } from '../apis/campuses'

export const SET_CAMPUSES = 'SET_CAMPUSES'

export const getCampusesFromAPI = () => dispatch => {
  return fetchCampuses()
    .then(campuses => {
      dispatch(setCampuses(campuses))
      return null
    })
    .catch(e => {
      console.log(e.message)
    })
}

export const setCampuses = (campuses) => {
  return {
    type: SET_CAMPUSES,
    campuses
  }
}
