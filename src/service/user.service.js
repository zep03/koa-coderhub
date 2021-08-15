const connection = require('../app/database.js')
class UserService {
    async create(user) {
        const { name, password } = user
       // 将user存储到数据库中
        const statement = `insert into user (name, password) values(?, ?);`
        const result = await connection.execute(statement, [name, password])
        return result[0]
    }
    async getUserByName(name) {
        const statement = `select * from user where name = ?;`
        const result = await connection.execute(statement, [name])
        return result[0]
    }

    async updateAvatarUrlById(userId, avatarUrl) {
        const statement = `update user set avatar_url = ? where id = ?;`
        const result = await connection.execute(statement, [avatarUrl, userId])
        return result[0]
    }
}
module.exports = new UserService()
