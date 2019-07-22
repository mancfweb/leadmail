const express = require('express')

const routes = express.Router()

const authMiddleware = require('./app/middlewares/auth')

const appRoutes = require('./app/routes')

routes.use('/sessions', appRoutes.SessionRouter)
routes.use('/verify', appRoutes.VerifyRouter)
routes.use('/users', appRoutes.UsersRouter)

routes.use(authMiddleware)
routes.use('/emails', appRoutes.MailsRouter)

module.exports = routes
