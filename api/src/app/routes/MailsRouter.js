const express = require('express')
const handle = require('express-async-handler')

const MailsRouter = express.Router()

const controllers = require('../controllers')
const mailVerify = require('../middlewares/mail')

MailsRouter.post('/', mailVerify, handle(controllers.MailController.store))
MailsRouter.get('/', handle(controllers.MailController.index))

module.exports = MailsRouter
