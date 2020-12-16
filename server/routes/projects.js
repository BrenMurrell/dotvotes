/* eslint-disable promise/no-nesting */
const express = require('express')

// const dbCohorts = require('../db/cohorts')
const dbProjects = require('../db/projects')
const router = express.Router()

router.get('/', (req, res) => {
  return dbProjects.selectProjectsAll()
    .then(projects => {
      res.status = 200
      return res.json(projects)
    })
    .catch(e => {
      res.status = 500
      return res.json(e.message)
    })
})

router.get('/:id', (req, res) => {
  const projectId = req.params.id
  return dbProjects.selectprojectById(projectId)
    .then(project => {
      res.status = 200
      return res.json(project)
    })
    .catch(e => {
      res.status = 500
      res.json(e.message)
    })
})

router.get('/:id', (req, res) => {
  const projectId = req.params.id
  return dbProjects.selectProjectById(projectId)
    .then(project => {
      res.status = 200
      return res.json(project)
    })
    .catch(e => {
      res.status = 500
      res.json(e.message)
    })
})

module.exports = router
