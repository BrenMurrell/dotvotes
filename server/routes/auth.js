const express = require('express')
// var jwt = require('jsonwebtoken')

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

module.exports = router
