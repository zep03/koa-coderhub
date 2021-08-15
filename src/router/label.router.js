const Router = require('koa-router')

const {verifyAuth} = require('../middleware/auth.middleware')

const {create, list} = require('../controller/label.controller.js')

const labelRouter = new Router({prefix: '/label'})

labelRouter.post('/', verifyAuth, create)

// 查询标签
labelRouter.get('/', list)


module.exports = labelRouter
