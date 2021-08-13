const Router = require('koa-router')
const { verifyAuth } = require('../middleware/auth.middleware')
const { create, reply } = require('../controller/comment.controller.js')

const commentRouter = new Router({prefix: '/comment'})

// 发表评论
commentRouter.post('/', verifyAuth, create)
// 回复评论
commentRouter.post('/:commentId/reply', verifyAuth, reply)

module.exports = commentRouter
