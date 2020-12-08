import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getCohortsFromAPI } from '../actions/cohorts'

const Cohorts = (props) => {
  useEffect(() => {
    // console.log('get cohorts from db via action here')
    props.dispatch(getCohortsFromAPI())
  }, [])
  return (
    <>Cohorts
      <ul>
        {props.cohorts.map(cohort => {
          return <li key={cohort.id}><Link to={`/cohorts/${cohort.id}`}>{cohort.display_name}</Link></li>
        })}
      </ul>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    cohorts: globalState.cohorts
  }
}

export default connect(mapStateToProps)(Cohorts)
