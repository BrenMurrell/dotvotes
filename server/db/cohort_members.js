const connection = require('./connection')

const insertNewCohortMember = (member, db = connection) => {
  return db('cohort_members').insert(member)
}

const selectCohortMembersAll = (db = connection) => {
  return db('cohort_members').select()
}

const selectMembersByCohort = (cohortId, db = connection) => {
  return db('cohort_members')
    .select()
    .where('cohort_id', cohortId)
    .first()
}

module.exports = {
  insertNewCohortMember,
  selectCohortMembersAll,
  selectMembersByCohort
}
