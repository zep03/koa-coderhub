const Router = require('koa-router')

const momentRouter = new Router({prefix: '/moment'})
const { verifyAuth, verifyPermission } = require('../middleware/auth.middleware.js')
const { create, detail, list, update, remove } = require('../controller/moment.controller.js')


momentRouter.post('/', verifyAuth, create)
// 动态列表
momentRouter.get('/', list)
// 动态详情
momentRouter.get('/:momentId', detail)
// 修改动态
// 1.用户必须登录 // 2.用户只能修改自己发布的动态
momentRouter.patch('/:momentId', verifyAuth, verifyPermission, update)
momentRouter.delete('/:momentId', verifyAuth, verifyPermission, remove)


module.exports = momentRouter
