const Router = require('koa-router')

const controller = require('../controller/user.controller.js')

const { verifyUser, handlePassword } = require('../middleware/user.middleware.js')
const userRouter = new Router({prefix: '/users'})

// 用户注册
userRouter.post('/', verifyUser, handlePassword, controller.create)

module.exports = userRouter
