const jwt = require('jsonwebtoken')
const { PBULIC_LEY, PRIVATE_KEY } = require('../app/config')

class AuthController {
    async login(ctx, next) {
        const { id, name } = ctx.user
        const token = jwt.sign({
            id: id,
            name: name
        }, PRIVATE_KEY, {
            expiresIn: 60 * 60 * 24,
            algorithm: 'RS256'
        })
        ctx.body = {
            id: id,
            name: name,
            token : token
        }
    }

    async success(ctx, next) {
        ctx.body = '授权成功'
    }
}

module.exports = new AuthController()
