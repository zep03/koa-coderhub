const Router = require('koa-router')

const controller = require('../controller/user.controller.js')

const { verifyUser } = require('../middleware/user.middleware.js')
const userRouter = new Router({prefix: '/users'})

userRouter.post('/', verifyUser, controller.create)

module.exports = userRouter
