const connection = require('../app/database.js')

class MomentService {
    async create(userId, content) {
        const statement = `insert into moment (content, user_id) values(?, ?);`
        const result = await connection.execute(statement, [content, userId])
        return result[0]
    }

    async getMomentById(momentId) {
        const statement = `SELECT m.id, m.content, m.createAt, m.updateAt as updateTime,
                        JSON_OBJECT('id', u.id, 'name', u.name) as author
                        FROM moment as m
                        left join user as u on m.user_id = u.id
                        where m.id = ?;`
        const result = await connection.execute(statement, [momentId])
        return result[0][0]
    }

    async getMomentList(offset, size) {
        const statement = `SELECT m.id, m.content, m.createAt, m.updateAt as updateTime,
                        JSON_OBJECT('id', u.id, 'name', u.name) as author
                        FROM moment as m
                        left join user as u on m.user_id = u.id
                        limit ?, ?;`
        const result = await connection.execute(statement, [offset, size])
        return result[0]
    }
}

module.exports = new MomentService()
