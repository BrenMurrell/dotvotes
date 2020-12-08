const connection = require('./connection')

const insertNewUser = (user, db = connection) => {
  return db('users').insert(user)
}

const selectUsersAll = (db = connection) => {
  return db('users')
    .select()
    .orderBy('username')
}

const selectUserByUsername = (username, db = connection) => {
  return db('users')
    .select()
    .where('username', username)
    .first()
}

module.exports = {
  insertNewUser,
  selectUsersAll,
  selectUserByUsername
}
