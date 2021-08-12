const md5password = require('../utils/password-handle.js')
const service = require('../service/user.service.js')
const errorType = require('../constants/error-types.js')

const verifyLogin = async (ctx, next) => {
    // 1.获取用户和密码
    const { name, password } = ctx.request.body
    // 2.判断用户名和密码是否为空
    if (!name || !password) {
        const error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED)
        return ctx.app.emit('error', error, ctx)
    }
    // 3.判断用户是否存在（用户不存在）
    const result = await service.getUserByName(name)
    // console.log(result)
    const user = result[0]
    if (!user) {
        const error = new Error(errorType.USER_DOES_NOT_EXISTS)
        return ctx.app.emit('error', error, ctx)
    }
    // 4.判断密码是否和数据库中的密码一致
    if (md5password(password) !== user.password) {
        const error = new Error(errorType.PASSWORD_IS_INCORRECT)
        return ctx.app.emit('error', error, ctx)
    }


    await next()
}


module.exports = {
    verifyLogin
}
