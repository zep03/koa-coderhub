class AuthController {
    async login(ctx, next) {
        const user = ctx.request.body
        ctx.body = `登录成功，欢迎${user.name}回来~`
    }
}

module.exports = new AuthController()
