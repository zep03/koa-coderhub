const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
// const userRouter = require('../router/user.router.js')
// const authRouter = require('../router/auth.router.js')
const errorHandler = require('./error-handle.js')
const useRoutes = require('../router/index.js')


const app = new Koa()

app.use(bodyParser())

useRoutes(app)
/*app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

app.use(authRouter.routes())
app.use(authRouter.allowedMethods())*/

app.on('error', errorHandler)
module.exports = app

