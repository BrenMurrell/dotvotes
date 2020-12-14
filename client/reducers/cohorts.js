import { SET_COHORTS } from '../actions/cohorts'

const intialState = []

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_COHORTS:
      return action.cohorts
    default:
      return state
  }
}

export default reducer
