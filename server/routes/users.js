/* eslint-disable promise/no-nesting */
const express = require('express')
const request = require('superagent')

// var jwt = require('jsonwebtoken')
// var admin = require('firebase-admin')
// var app = admin.initializeApp()

const dbUsers = require('../db/users')
const dbCohortMembers = require('../db/cohort_members')
const router = express.Router()

router.get('/', (req, res) => {
  let userList = []
  return dbUsers.selectUsersAll()
    .then(users => {
      userList = users
      return dbCohortMembers.selectCohortMembersAll()
        .then(cohortMembers => {
          userList.map(user => {
            user.cohorts = []
            cohortMembers.map(member => {
              if (member.user_uid === user.uid) {
                user.cohorts.push(member.cohort_id)
              }
            })
          })
          return res.json(userList)
        })
    })
    .catch(err => {
      res.json(err)
    })
})

router.get('/username/:username', (req, res) => {
  const username = req.params.username
  return dbUsers.selectUserByUsername(username)
    .then(user => {
      return res.json(user)
    })
    .catch(err => {
      res.json(err)
    })
})

router.get('/github/:username', (req, res) => {
  const username = req.params.username
  return request.get(`https://api.github.com/users/${username}`)
    .then(userObj => {
      console.log('api found: ', userObj.body)
      return res.json(userObj)
    })
})

router.post('/', (req, res) => {
  const user = req.body.user
  // const token = req.body.token

  // return res.json({ user: user, token: token })
  // use token to check log in - if works then do:

  // app
  //   .auth()
  //   .verifyIdToken(token)
  //   .then((decodedToken) => {
  //   })

  return dbUsers.insertNewUser(user)
    .then(result => {
      return res.json(result)
    })
    .catch(err => {
      console.log(err.message)
      res.json(err)
    })
})

module.exports = router
