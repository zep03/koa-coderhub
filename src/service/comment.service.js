const connection = require('../app/database.js')

class CommentService {
    async create(momentId, content, userId) {
        const statement = `insert into comment (content, moment_id, user_id) values(?, ?, ?)`
        const result = await connection.execute(statement, [content, momentId, userId])
        return result[0]
    }

    async reply(momentId, content, id, commentId) {
        const statement = `insert into comment (content, moment_id, user_id, comment_id) values(?, ?, ?, ?)`
        try {
            const result = await connection.execute(statement, [content, momentId, id, commentId])
            return result[0]
        } catch (err) {
            console.log(err)
        }

    }
}

module.exports = new CommentService()
