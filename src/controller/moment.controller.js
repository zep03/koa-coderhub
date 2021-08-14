const momentService = require('../service/moment.service.js')

class MomentController {
    async create(ctx, next) {
        // 1.获取数据（user_id, content, 图片）
        const userId = ctx.user.id
        const content = ctx.request.body.content
        console.log(userId, content)
        // 2.将数据插入到数据库
        const result = await momentService.create(userId, content)
        ctx.body = result
    }

    async detail(ctx, next) {
        // 1.获取数据（momentId）
        const momentId = ctx.params.momentId
        // 2.根据id去查询这条数据
        const result = await momentService.getMomentById(momentId)
        ctx.body = result
    }

    async list(ctx, next) {
        // 1.获取数据（momentId）
        const { offset, size } = ctx.query
        // 2.查询列表
        const result = await momentService.getMomentList(offset, size)
        ctx.body = result
    }

    async update(ctx, next) {
        // 1.获取参数
        const { momentId } = ctx.params
        const { content } = ctx.request.body
        // 2.修改内容
        const result = await momentService.update(content, momentId)
        ctx.body = result
    }

    async remove(ctx, next) {
        const { momentId } = ctx.params
        const result = await momentService.remove(momentId)
        ctx.body = result
    }

    async addLabels(ctx, next) {
        // 1.获取标签和动态的id
        const { labels } = ctx
        const {momentId} = ctx.params
        console.log(labels)
        console.log(momentId)
        // 2.添加所有的标签
        for (let label of labels) {
            // 2. 判断标签是否已经和动态建立关联了
            const isExist = await momentService.hasLabel(momentId, label.id)
            if (!isExist) {
                const result = await momentService.addLabel(momentId, label.id)
            }
        }
        ctx.body = {
            statusCode: 200,
            message: '给动态添加标签成功'
        }
    }
}

module.exports = new MomentController()
