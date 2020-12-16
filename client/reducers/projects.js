import { SET_PROJECTS } from '../actions/projects'

const intialState = []

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_PROJECTS:
      return action.projects
    default:
      return state
  }
}

export default reducer
