const app = require('./app/index.js')
const config = require('./app/config.js')
require('./app/database.js')

app.listen(config.APP_PORT, () => {
    console.log(`服务器在${config.APP_PORT}端口启动成功~`)
})
