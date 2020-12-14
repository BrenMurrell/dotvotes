import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Cohorts from './Cohorts'

const Campus = (props) => {
  const [thisCampus, setThisCampus] = useState()

  useEffect(() => {
    if (props.campuses.length) {
      setThisCampus(props.campuses.filter(campus => campus.id === props.match.params.campus)[0])
    }
  }, [props.campuses])

  return (
    <>
      <h2>
        {thisCampus && thisCampus.campus_name}
      </h2>

      <Cohorts filterCohorts={props.match.params.campus} />
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    campuses: globalState.campuses
  }
}

export default connect(mapStateToProps)(Campus)
