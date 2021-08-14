const Router = require('koa-router')

const {verifyAuth} = require('../middleware/auth.middleware')

const {create} = require('../controller/label.controller.js')

const labelRouter = new Router({prefix: '/label'})

labelRouter.post('/', verifyAuth, create)


module.exports = labelRouter
