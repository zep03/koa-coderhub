const connection = require('../app/database.js')

class CommentService {
    async create(momentId, content, userId) {
        const statement = `insert into comment (content, moment_id, user_id) values(?, ?, ?)`
        const result = await connection.execute(statement, [content, momentId, userId])
        return result[0]
    }
}

module.exports = new CommentService()
