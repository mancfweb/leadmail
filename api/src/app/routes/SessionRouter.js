const express = require('express')
const handle = require('express-async-handler')

const SessionRouter = express.Router()

const controllers = require('../controllers')

SessionRouter.post('/', handle(controllers.SessionController.store))

module.exports = SessionRouter
