const db = require('./users')
const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV
const testDb = knex(config[env])

beforeAll(() => {
})

beforeEach(() => {
  return testDb.migrate.latest()
    .then(() => {
      return testDb.seed.run()
    })
})

describe('DB: User tests', () => {
  test('C: can add a new user', () => {
    const newUser = {
      username: 'rose-mead',
      cohort: '2020-hihi-test'
    }
    const expected = newUser.cohort
    return db.insertNewUser(newUser, testDb)
      .then(() => {
        return db.selectUserByUsername(newUser.username, testDb)
          .then(user => {
            const actual = user.cohort
            expect(actual).toEqual(expected)
            return null
          })
      })
  })

  test('R: can get a user by username', () => {
    const expected = {
      username: 'brenmurrell',
      cohort: '2020-hihi'
    }
    return db.selectUserByUsername(expected.username, testDb)
      .then(user => {
        const actual = user
        return expect(actual).toEqual(expected)
      })
  })

  test('R: can get all users', () => {
    const expected = 3
    return db.selectUsersAll(testDb)
      .then(users => {
        const actual = users.length
        expect(actual).toEqual(expected)
        return null
      })
  })
})
