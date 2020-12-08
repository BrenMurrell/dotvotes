import { SET_CAMPUSES } from '../actions/campuses'

const intialState = []

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_CAMPUSES:
      return action.campuses
    default:
      return state
  }
}

export default reducer
