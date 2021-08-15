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

    async createFile(filename, mimetype, size, userId, momentId) {
        const statement = `insert into file (filename, mimetype, size, user_id, moment_id) values(?, ?, ?, ?, ?);`
        const [result] = await connection.execute(statement, [filename, mimetype, size, userId, momentId])
        return result
    }

    async getFileInfoByFilename(filename) {
        const statement = `select * from file where filename = ?;`
        const [result] = await connection.execute(statement, [filename])
        return result[0]
    }

    async getImagesByMomentId(momentId) {
        const statement = `select * from file
                            left join moment 
                            on moment.id = file.moment_id
                            where moment.id = ?;`
        const [result] = await connection.execute(statement, [momentId])
        return result
    }
}


module.exports = new FileService()
