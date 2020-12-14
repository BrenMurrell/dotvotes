import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Cohorts = (props) => {
  const [localCohorts, setLocalCohorts] = useState([])

  useEffect(() => {
    !props.filterCohorts && setLocalCohorts(props.cohorts)
    props.filterCohorts && setLocalCohorts(props.cohorts.filter(cohort => cohort.campus_id === props.filterCohorts))
  }, [props.cohorts])
  return (
    <>
      <h2>Cohorts</h2>
      <ul>
        {localCohorts.map(cohort => (
          <li key={cohort.id}><Link to={`/cohorts/${cohort.id}`}>{cohort.display_name}</Link></li>
        ))}
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
