import React, { useEffect } from 'react'
import { HashRouter as Router, Route, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUser, fetchUsersFromApi } from '../actions/auth'
import { getCampusesFromAPI } from '../actions/campuses'
import { getCohortsFromAPI } from '../actions/cohorts'
import UserControls from './UserControls'
import Cohort from './Cohort'
import Cohorts from './Cohorts'
import Campuses from './Campuses'
import Campus from './Campus'

const App = (props) => {
  useEffect(() => {
    props.dispatch(fetchUsersFromApi())
    props.dispatch(fetchUser())
    props.dispatch(getCampusesFromAPI())
    props.dispatch(getCohortsFromAPI())
  }, [])

  return (
    <div className='app'>
      <h1>.votes</h1>
      <Router>
        <nav>
          <NavLink to="/">Home</NavLink>{' | '}
          <NavLink to="/campuses">Campuses</NavLink>{' | '}
          <NavLink to="/cohorts">Cohorts</NavLink>
        </nav>
        {props.users !== [] && (
          <>
            <Route path="/cohorts" exact component={Cohorts} />
            <Route path="/cohorts/:cohort" exact component={Cohort}/>
            <Route path="/campuses" exact component={Campuses} />
            <Route path="/campuses/:campus" exact component={Campus} />
          </>
        )}
      </Router>
      <UserControls />
    </div>
  )
}

function mapStateToProps (globalState) {
  return {
    auth: globalState.auth,
    users: globalState.users
  }
}

export default connect(mapStateToProps)(App)
