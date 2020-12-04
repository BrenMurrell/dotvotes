import React, { useEffect } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUser, fetchUsersFromApi } from '../actions/auth'
import User from './User'
import Cohort from './Cohort'
const App = (props) => {
  useEffect(() => {
    props.dispatch(fetchUsersFromApi())
    props.dispatch(fetchUser())
  }, [])

  return (
    <div className='app'>
      <h1>.votes</h1>
      <Router>
        <Switch>
          {props.users !== [] && (
            <Route path="/cohort/:cohort" exact component={Cohort}/>
          )}
        </Switch>
      </Router>
      <ul>
        { props.users.map(user => (
          <li key={user.uid}>
            <img className="avatar avatar--24" src={`https://avatars3.githubusercontent.com/u/${user.uid}?s=24&v=4`} />
            {user.username}
          </li>
        ))}
      </ul>
      <User />
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
