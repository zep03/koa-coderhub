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

    async update(commentId, content) {
        const statement = `update comment set content = ? where id = ?;`
        try {
            const result = await connection.execute(statement, [content, commentId])
            return result[0]
        } catch (err) {
            console.log(err)
        }
    }

    async remove(commentId) {
        const statement = `delete from comment where id = ?;`
        try {
            const result = await connection.execute(statement, [commentId])
            return result[0]
        } catch (err) {
            console.log(err)
        }
    }

    async getCommentsByMomentId(momentId) {
        const statement = `select m.id, m.content, m.comment_id as commentId, m.createAt as createTime, 
                        JSON_OBJECT('id', u.id, 'name', u.name) as user
                        from comment as m
                        left join user as u on u.id = m.user_id
                        where moment_id = ?;`
        try {
            const result = await connection.execute(statement, [momentId])
            return result[0]
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = new CommentService()
