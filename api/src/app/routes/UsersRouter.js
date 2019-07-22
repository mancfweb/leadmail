const express = require('express')
const handle = require('express-async-handler')

const UsersRouter = express.Router()

const controllers = require('../controllers')
const authMiddleware = require('../middlewares/auth')

UsersRouter.post('/', handle(controllers.UserController.store))

UsersRouter.use(authMiddleware)
UsersRouter.get('/', handle(controllers.UserController.index))
UsersRouter.get('/:id', handle(controllers.UserController.show))
UsersRouter.put('/:id', handle(controllers.UserController.update))
UsersRouter.delete('/:id', handle(controllers.UserController.destroy))

module.exports = UsersRouter
