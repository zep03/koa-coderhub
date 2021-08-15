const connection = require('../app/database.js')

class FileService {
    async createAvatar(filename, mimetype, size, userId) {
        const statement = `insert into avatar (filename, mimetype, size, user_id) values(?, ?, ?, ?);`
        const [result] = await connection.execute(statement, [filename, mimetype, size, userId])
        return result
    }

    async getAvatarByUserId(userId) {
        const statement = `select * from avatar where user_id = ?;`
        const [result] = await connection.execute(statement, [userId])
        return result[0]
    }
}


module.exports = new FileService()
