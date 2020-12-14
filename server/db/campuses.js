const connection = require('./connection')

const insertNewCampus = (campus, db = connection) => {
  return db('campuses').insert(campus)
}

const selectCampusesAll = (db = connection) => {
  return db('campuses').select()
}

const selectCampusById = (campusId, db = connection) => {
  return db('campuses')
    .select()
    .where('id', campusId)
    .first()
}

module.exports = {
  insertNewCampus,
  selectCampusesAll,
  selectCampusById
}
