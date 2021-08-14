const service = require('../service/comment.service.js')

class CommentController {
    async create(ctx, next) {
        const { momentId, content } = ctx.request.body
        const { id } = ctx.user

        const result = await service.create(momentId, content, id)
        ctx.body = result
    }
    async reply(ctx, next) {
        const { momentId, content } = ctx.request.body
        const { id } = ctx.user
        const { commentId } = ctx.params
        console.log('111')
        const result = await service.reply(momentId, content, id, commentId)
        ctx.body = result
    }

    async update(ctx, next) {
        const {commentId} = ctx.params
        const {content} = ctx.request.body
        const result = await service.update(commentId, content)
        ctx.body = result
        // ctx.body = '修改评论成功'
    }
}


module.exports = new CommentController()
