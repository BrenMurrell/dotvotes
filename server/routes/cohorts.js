/* eslint-disable promise/no-nesting */
const express = require('express')
// const request = require('superagent')

// var jwt = require('jsonwebtoken')
// var admin = require('firebase-admin')
// var app = admin.initializeApp()

const db = require('../db/cohorts')

const router = express.Router()

router.get('/', (req, res) => {
  return db.selectCohortsAll()
    .then(cohorts => {
      res.status = 200
      return res.json(cohorts)
    })
    .catch(e => {
      res.status = 500
      res.json(e.message)
    })
})

router.get('/:id', (req, res) => {
  const cohortId = req.params.id
  return db.selectCohortById(cohortId)
    .then(cohort => {
      res.status = 200
      return res.json(cohort)
    })
    .catch(e => {
      res.status = 500
      res.json(e.message)
    })
})

module.exports = router
