import { SET_USERS, ADDED_USER } from '../actions/auth'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return action.users
    case ADDED_USER:
      return [...state, action.user]
    default:
      return state
  }
}

export default reducer
