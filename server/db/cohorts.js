const connection = require('./connection')

const insertNewCohort = (cohort, db = connection) => {
  return db('cohorts').insert(cohort)
}

const selectCohortsAll = (db = connection) => {
  return db('cohorts').select().orderBy('status').orderBy('id')
}

const selectCohortById = (cohortId, db = connection) => {
  return db('cohorts')
    .select()
    .where('id', cohortId)
    .first()
}

const selectCohortsByCampus = (campusId, db = connection) => {
  return db('cohorts')
    .select()
    .where('campus_id', campusId)
}

module.exports = {
  insertNewCohort,
  selectCohortsAll,
  selectCohortById,
  selectCohortsByCampus
}
