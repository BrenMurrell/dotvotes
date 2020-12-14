const express = require('express')
const path = require('path')

const userRoutes = require('./routes/users')
const cohortRoutes = require('./routes/cohorts')
const campusRoutes = require('./routes/campuses')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/users', userRoutes)
server.use('/api/v1/cohorts', cohortRoutes)
server.use('/api/v1/campuses', campusRoutes)

module.exports = server
