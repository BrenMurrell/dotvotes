import { combineReducers } from 'redux'

import auth from './auth'
import campuses from './campuses'
import cohorts from './cohorts'
import projects from './projects'
import users from './users'

export default combineReducers({
  auth,
  campuses,
  cohorts,
  projects,
  users
})
