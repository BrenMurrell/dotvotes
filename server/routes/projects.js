/* eslint-disable promise/no-nesting */
const express = require('express')
// const { checkIfAuthenticated } = require('../middlewares/auth-middleware')

const dbProjects = require('../db/projects')
const router = express.Router()

// example of protected route:
// router.get('/', checkIfAuthenticated, async (req, res) => {
// })

router.get('/', async (req, res) => {
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
