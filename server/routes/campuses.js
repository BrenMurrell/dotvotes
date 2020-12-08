/* eslint-disable promise/no-nesting */
const express = require('express')

const dbCohorts = require('../db/cohorts')
const router = express.Router()

router.get('/:id/cohorts', (req, res) => {
  const campusId = req.params.id
  return dbCohorts.selectCohortsByCampus(campusId)
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
