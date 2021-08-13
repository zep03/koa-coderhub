const Router = require('koa-router')

const momentRouter = new Router({prefix: '/moment'})
const { verifyAuth } = require('../middleware/auth.middleware.js')
const { create } = require('../controller/moment.controller.js')


momentRouter.post('/', verifyAuth, create)
// momentRouter.get('/:momentId',)

module.exports = momentRouter
