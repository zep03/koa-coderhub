const Router = require('koa-router')
const { verifyAuth } = require('../middleware/auth.middleware')
const { create } = require('../controller/comment.controller.js')

const commentRouter = new Router({prefix: '/comment'})

commentRouter.post('/', verifyAuth, create)

module.exports = commentRouter
