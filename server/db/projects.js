const connection = require('./connection')

// const insertNewCohort = (cohort, db = connection) => {
//   return db('cohorts').insert(cohort)
// }

const selectProjectsAll = (db = connection) => {
  return db('projects').select().orderBy('name')
}

const selectProjectsByCohort = (cohortId, db = connection) => {
  return db('projects')
    .select()
    .where('cohort_id', cohortId)
}

const selectProjectById = (projectId, db = connection) => {
  return db('projects')
    .select()
    .where('project_id', projectId)
    .first()
}

// const selectCohortsByCampus = (campusId, db = connection) => {
//   return db('cohorts')
//     .select()
//     .where('campus_id', campusId)
// }

module.exports = {
  selectProjectsAll,
  selectProjectsByCohort,
  selectProjectById
}
