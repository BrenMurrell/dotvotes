import { fetchCohorts } from '../apis/cohorts'

export const SET_COHORTS = 'SET_COHORTS'

export const getCohortsFromAPI = () => dispatch => {
  return fetchCohorts()
    .then(cohorts => {
      dispatch(setCohorts(cohorts))
      return null
    })
    .catch(e => {
      console.log(e.message)
    })
}

export const setCohorts = (cohorts) => {
  return {
    type: SET_COHORTS,
    cohorts
  }
}
