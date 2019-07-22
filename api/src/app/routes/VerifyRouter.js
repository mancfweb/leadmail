const express = require('express')
const handle = require('express-async-handler')

const VerifyRouter = express.Router()

const controllers = require('../controllers')

VerifyRouter.post('/', handle(controllers.VerifyController.show))

module.exports = VerifyRouter
