const Router = require('koa-router')

const momentRouter = new Router({prefix: '/moment'})
const { verifyAuth, verifyPermission } = require('../middleware/auth.middleware.js')
const { create, detail, list, update, remove, addLabels, getLabels, fileInfo, getImages } = require('../controller/moment.controller.js')
const { verifyLabelExists } = require('../middleware/label.middleware.js')

momentRouter.post('/', verifyAuth, create)

// 动态列表
momentRouter.get('/', list)
// 动态详情
momentRouter.get('/:momentId', detail)

// 修改动态
// 1.用户必须登录 // 2.用户只能修改自己发布的动态
momentRouter.patch('/:momentId', verifyAuth, verifyPermission, update)
// 删除动态
momentRouter.delete('/:momentId', verifyAuth, verifyPermission, remove)

// 给动态添加标签
momentRouter.post('/:momentId/labels', verifyAuth, verifyPermission, verifyLabelExists, addLabels)

// 根据momentId查询标签
momentRouter.get('/:momentId/labels', getLabels)

// 根据filename获取动态配图
momentRouter.get('/images/:filename', fileInfo)

// 根据momentId查询动态配图
momentRouter.get('/img/:momentId', getImages)

module.exports = momentRouter
