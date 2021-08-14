const jwt = require('jsonwebtoken')
const {PUBLIC_KEY} = require('../app/config')
const md5password = require('../utils/password-handle.js')
const userService = require('../service/user.service.js')
const errorType = require('../constants/error-types.js')
const authService = require('../service/auth.service.js')

const verifyLogin = async (ctx, next) => {
    // 1.获取用户和密码
    const { name, password } = ctx.request.body
    // 2.判断用户名和密码是否为空
    if (!name || !password) {
        const error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED)
        return ctx.app.emit('error', error, ctx)
    }
    // 3.判断用户是否存在（用户不存在）
    const result = await userService.getUserByName(name)
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
    ctx.user = user
    await next()
}
const verifyAuth = async (ctx, next) => {
    console.log('验证授权的middleware~')
    // 1.获取token
    const authorization = ctx.headers.authorization
    if (!authorization) {
        const error = new Error(errorType.UNAUTHORIZATION)
        return ctx.app.emit('error', error, ctx)
    }
    const token = authorization.replace('Bearer ', '')
    // 2.验证token
    try {
        const result = jwt.verify(token, PUBLIC_KEY, {
            algorithm: ['RS256']
        })
        ctx.user = result
        await next()
    } catch (err) {
        const error = new Error(errorType.UNAUTHORIZATION)
        ctx.app.emit('error', error, ctx)
    }
}
const verifyPermission = async (ctx, next) => {
    console.log('验证权限的middleware~')
    // 1.获取参数
    console.log(ctx.params)
    const [resourceKey] = Object.keys(ctx.params)
    const tableName = resourceKey.replace('Id', '')
    const resourceId = ctx.params[resourceKey]
    const { id } = ctx.user
    // 2.查询是否具备权限
    try {
        const isPermission = await authService.checkResource(tableName, resourceId, id)
        if (!isPermission) throw new Error()
        await next()
    } catch (err) {
        const error = new Error(errorType.UNPERMISSION)
        return ctx.app.emit('error', error, ctx)
    }
}
module.exports = {
    verifyLogin,
    verifyAuth,
    verifyPermission
}
