const mysql = require('mysql2')
const config = require('./config.js')
const connections = mysql.createPool({
   /* host: config.MYSQL_HOST,
    port: config.APP_PORT,
    database: config.MYSQL_DATABASE,
    user: config.MYSQL_USER,
    password: config.MYSQL_PASSWORD,
    connectionLimit: 10*/
    host: 'localhost',
    port: 3306,
    database: 'coderhub',
    user: 'root',
    password: 'root',
    connectionLimit: 10
})
connections.getConnection((err, conn) => {
        if (err) {
            console.log('数据库连接失败', err)
        } else {
            console.log('数据库连接成功~~')
        }
})
module.exports = connections.promise()
