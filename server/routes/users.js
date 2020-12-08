/* eslint-disable promise/no-nesting */
const express = require('express')
const request = require('superagent')

// var jwt = require('jsonwebtoken')
// var admin = require('firebase-admin')
// var app = admin.initializeApp()

const db = require('../db/users')

const router = express.Router()

router.get('/', (req, res) => {
  return db.selectUsersAll()
    .then(users => {
      return res.json(users)
    })
    .catch(err => {
      res.json(err)
    })
})

router.get('/username/:username', (req, res) => {
  const username = req.params.username
  return db.selectUserByUsername(username)
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
  return db.insertNewUser(user)
    .then(result => {
      return res.json(result)
    })
    .catch(err => {
      console.log(err.message)
      res.json(err)
    })
})

module.exports = router
