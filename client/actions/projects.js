import { fetchProjects } from '../apis/projects'

export const SET_PROJECTS = 'SET_PROJECTS'

const setProjects = (projects) => {
  return {
    type: SET_PROJECTS,
    projects
  }
}

export const getProjectsFromAPI = () => dispatch => {
  return fetchProjects()
    .then(projects => {
      dispatch(setProjects(projects))
      return null
    })
    .catch(e => {
      console.log(e.message)
    })
}
