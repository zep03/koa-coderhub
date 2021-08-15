const userService = require('../service/user.service.js')
const fileService = require('../service/file.service')
const { AVATAR_PATH } = require('../constants/file-path.js')
const fs = require('fs')

class UserController {
    async create(ctx, next) {
        // 获取用户请求传递的参数
        const user = ctx.request.body
        // 查询数据
        const result = await userService.create(user)

        // 返回数据
        ctx.body = result
    }

    async avatarInfo(ctx, next) {
        // 获取用户请求传递的参数
        const {userId} = ctx.params
        // 查询数据
        const avatarInfo = await fileService.getAvatarByUserId(userId)

        // 提供图像信息
        ctx.response.set('content-type', avatarInfo.mimeType)
        ctx.body = fs.createReadStream(`${AVATAR_PATH}/${avatarInfo.filename}`)
    }
}

module.exports = new UserController()
