/* eslint-disable promise/no-nesting */
const express = require('express')

const dbCohorts = require('../db/cohorts')
const dbCohortMembers = require('../db/cohort_members')
const dbProjects = require('../db/projects')

const router = express.Router()

router.get('/', (req, res) => {
  let cohorts = []
  // let projects = []
  return dbCohorts.selectCohortsAll()
    .then(cohortsList => {
      cohorts = cohortsList
      return dbCohortMembers.selectCohortMembersAll()
        .then(cohortMembers => {
          cohorts.map(cohort => {
            cohort.members = []
            cohortMembers.map(member => {
              if (member.cohort_id === cohort.id) {
                cohort.members.push(member.user_uid)
              }
            })
          })
          res.status = 200
          return res.json(cohorts)
        })
    })
    .catch(e => {
      res.status = 500
      res.json(e.message)
    })
})

router.get('/:id', (req, res) => {
  const cohortId = req.params.id
  return dbCohorts.selectCohortById(cohortId)
    .then(cohort => {
      res.status = 200
      return res.json(cohort)
    })
    .catch(e => {
      res.status = 500
      res.json(e.message)
    })
})

router.get('/:id/projects', (req, res) => {
  const cohortId = req.params.id
  return dbProjects.selectProjectsByCohort(cohortId)
    .then(projects => {
      res.status = 200
      return res.json(projects)
    })
    .catch(e => {
      res.status = 500
      res.json(e.message)
    })
})

module.exports = router
