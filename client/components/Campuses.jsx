import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Campuses = (props) => {
  return (
    <>
      <h2>Campuses</h2>
      <ul>
        { props.campuses.map(campus => {
          return (
            <li key={campus.id}>
              <Link to={`/campuses/${campus.id}`}>
                {campus.campus_name}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    campuses: globalState.campuses
  }
}

export default connect(mapStateToProps)(Campuses)
